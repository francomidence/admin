const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    code: {
      type: String
    },
    customer: {
      type: String
    },
    phone: {
      type: String
    },
    address: {
      type: String
    },
    soldDate: {
      type: Date
    },
    deliverDate: {
      type: Date
    },
    articles: [
      {
        //name hace referencia al id del articulo
        quantity: Number,
        name: String,
        price: Number,
        comments: String
      }
    ],
    total: {
      type: Number
    },
    store: {
      type: String
    },
    driver: {
      type: String
    },
    status: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
