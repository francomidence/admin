const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      require: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
