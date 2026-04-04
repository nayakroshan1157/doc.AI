const mongoose = require('mongoose');

const ConsultationSchema = new mongoose.Schema({
    // Optional: If you want to link it to the logged-in patient
    // Note: You'll need to send patientId from the frontend or get it from the session on the backend
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patients',
        required: false // Set to true if you require a login to book
    },
    doctorName: {
        type: String,
        required: true,
        default: "Dr. Sarah Chen"
    },
    date: {
        type: String, // Matches the 'selectedDate' state (YYYY-MM-DD)
        required: true
    },
    slot: {
        type: String, // Matches the 'selectedSlot' state (e.g., "10:30 AM")
        required: true
    },
    mode: {
        type: String, // Matches the 'mode' state ("Virtual" or "In-Person")
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

// Using 'consultations' as the collection name to match your route /consultation
const ConsultationModel = mongoose.model('consultations', ConsultationSchema);

module.exports = ConsultationModel;