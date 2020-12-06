const mongoose = require('mongoose');

const Notification = new mongoose.Schema({
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
  enableNotification: {
    type: Boolean,
    required: true,
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

module.exports = mongoose.model('Notification', Notification, 'Notification');
