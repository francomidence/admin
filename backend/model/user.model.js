const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: 'usuario',
      enum: ['motorista', 'usuario', 'administrador']
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model('users', userSchema);
