const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  byline: String,
  pubdate: { type: Date },
  thumbnail: String,
  url: { type: String, required: true },
  date: { type: Date, default: Date.now },
  snippet: String
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
