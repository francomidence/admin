const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const statusSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const StatusType = mongoose.model('Status', statusSchema);

module.exports = StatusType;
