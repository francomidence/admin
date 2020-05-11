const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const ArticleType = mongoose.model('ArticleType', articleTypeSchema);

module.exports = ArticleType;
