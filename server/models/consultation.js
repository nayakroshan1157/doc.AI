const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    // Link to the Patient model (Reference)
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patients',
        required: true
    },
    doctorName: {
        type: String,
        default: "Dr. Sarah Chen"
    },
    date: {
        type: String, // Or Date type if you prefer ISO strings
        required: true
    },
    slot: {
        type: String,
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

const AppointmentModel = mongoose.model('appointments', AppointmentSchema);

module.exports = AppointmentModel;