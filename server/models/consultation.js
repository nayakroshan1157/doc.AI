

const mongoose = require('mongoose');

const ConsultationSchema = new mongoose.Schema({
    // Link to the logged-in patient (Optional/Guest support)
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patients',
        required: false 
    },
    // NEW: Store the patient's full name
    patientName: {
        type: String,
        required: true,
        trim: true
    },
    // Store the email for reference and dispatch tracking
    patientEmail: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    doctorName: {
        type: String,
        required: true,
        default: "Dr. Sarah Chen"
    },
    date: {
        type: String, // Stored as YYYY-MM-DD
        required: true
    },
    slot: {
        type: String, // Stored as "10:30 AM"
        required: true
    },
    mode: {
        type: String, 
        enum: ['Virtual', 'In-Person'],
        default: 'Virtual'
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
        default: 'Confirmed'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Explicitly using 'consultations' as the collection name
const ConsultationModel = mongoose.model('consultations', ConsultationSchema);

module.exports = ConsultationModel;