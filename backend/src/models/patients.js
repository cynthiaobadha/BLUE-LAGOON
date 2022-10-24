const mongoose = require("mongoose");
const validator = require("validator");

const Patient = mongoose.model("Patient", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  phonenumber: {
    type: Number,
    required: true,
    default: 10,
    validate(value) {
      if (value <10) {
        throw new Error('PhoneNumber must be a positive number');
      }
    },
  },
  appointmenttime: {
    type: Date,
    default:Date.now,
    validate(value) {
      if (value < 0+":"+ 0 ) {
        throw new Error("AppointmentTime must be a postive number");
      }
    },
  },

appointmentdate: {
  type: Date,
  default:Date.now,
  validate(value) {
    if (value < 0+":"+ 0 ) {
      throw new Error("AppointmentDate must be a postive number");
    }
  },
},
selectADoctor: {
  type: String,
  required: true,
  trim: true,
},
});

module.exports = Patient;
