const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    code: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      trim: true
    },
    comment: {
      type: String,
      required: false,
      trim: false
    },
    articleType: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
