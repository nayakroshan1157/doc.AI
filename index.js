const express = require("express");
const path = require("path");
const app = express();
const { connectDB, LogInCollection } = require("./lib/mongo"); 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// PATH RECTIFICATION
// __dirname is the directory where index.js lives. 
// If index.js is in the ROOT, use "app". If index.js is in "src", use "../app"
const appPath = path.join(__dirname, "app"); 
const publicPath = path.join(__dirname, "public");

app.set("views", appPath);
app.set("view engine", "hbs"); 
app.use(express.static(publicPath));

// Ensure DB is connected
connectDB();

// --- GET ROUTES ---

app.get('/', (req, res) => {
    // Looks for /app/login/page.hbs
    res.render("login/page"); 
});

app.get('/signup', (req, res) => {
    // Looks for /app/signup/page.hbs
    res.render("signup/page"); 
});

// --- POST ROUTES ---

app.post('/login', async (req, res) => {
    try {
        const check = await LogInCollection.findOne({ name: req.body.name });

        if (!check) {
            return res.send("User not found");
        }

        if (check.password === req.body.password) {
            return res.status(201).render("profile/page", { 
                naming: check.name 
            });
        } else {
            return res.send("Incorrect password");
        }
    } catch (e) {
        return res.status(500).send("Server Error: Wrong details provided");
    }
});

app.post('/signup', async (req, res) => {
    try {
        const checking = await LogInCollection.findOne({ name: req.body.name });

        if (checking) {
            return res.send("User details already exist"); 
        } 
        
        const data = {
            name: req.body.name,
            password: req.body.password
        };

        await LogInCollection.create(data); // .create() is cleaner than .insertMany()
        
        return res.status(201).render("profile/page", { 
            naming: req.body.name 
        });
        
    } catch (e) {
        return res.status(500).send("Error during registration");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server connected on port ${PORT}`);
});