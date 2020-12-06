const mongoose = require('mongoose');

const Appointment = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  physicianAvailability: {
    type: Boolean,
    required:true
  },
  date: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Appointment', Appointment, 'Appointment');
