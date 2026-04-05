const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PatientModel = require('./models/patient'); // Ensure this path is correct
const ConsultationModel = require('./models/consultation'); // Ensure this path is correct
const transporter = require('./transporter/mailTransporter');

const app = express();
app.use(express.json()); // CRITICAL: This allows Express to read JSON from the frontend
app.use(cors());

app.use(bodyParser.json()); // This is optional since express.json() is already being used, but it won't cause issues



// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/patientDB') // Replace with your URI
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Failed to connect", err));


  

app.post('/register', (req, res) => {
  PatientModel.create(req.body)
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error: ' + err));
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  PatientModel.findOne({ email, password })
    .then(user => {
      if (user) {
        // Since findOne already matched email/password, 
        // we just need to send the user data back.
        res.json({
          id: user._id,
          name: user.name,   // <--- MAKE SURE 'name' EXISTS IN YOUR SCHEMA
          email: user.email,
          message: 'Login successful'
        });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Server error', error: err });
    });
});





// app.post('/consultation', async (req, res) => {
//     try {
//         const { doctorName, date, slot, mode } = req.body;

//         // Check if the slot is already taken for that doctor on that date
//         const existingAppointment = await ConsultationModel.findOne({ doctorName, date, slot });
        
//         if (existingAppointment) {
//             return res.status(400).json({ message: "This time node is already occupied." });
//         }

//         const newBooking = new ConsultationModel({
//             doctorName,
//             date,
//             slot,
//             mode
//         });

//         const savedBooking = await newBooking.save();
        
//         res.status(201).json({ 
//             success: true, 
//             message: "Protocol Synchronized", 
//             data: savedBooking 
//         });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Neural Link Error: Database failed to save." });
//     }
// });


// --- server.js ---

app.post('/consultation', async (req, res) => {
    try {
        const newBooking = new ConsultationModel(req.body);
        const savedBooking = await newBooking.save();

        // We only save to DB and return the ID. 
        // The Frontend handles the Email via EmailJS.
        res.status(201).json({ 
            success: true, 
            bookingId: savedBooking._id 
        });
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).json({ message: "DB Protocol Failure" });
    }
});
app.listen(5000, () => console.log("Server running on port 5000"));