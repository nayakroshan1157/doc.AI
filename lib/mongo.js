const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/medifloDB");
        console.log("Local MongoDB Connected...");
    } catch (err) {
        console.error("DB Error:", err.message);
        process.exit(1);
    }
};

const LogInSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
});

const LogInCollection = mongoose.model("LogInCollection", LogInSchema);

module.exports = { connectDB, LogInCollection };