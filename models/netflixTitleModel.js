import mongoose from "mongoose";

export const netflixTitleSchema = new mongoose.Schema({
  show_id: { type: Number, },
  title: { type: String },
  director: { type: String },
  cast: { type: [String] },
  country: { type: String },
  date_added: { type: String },
  release_year: { type: Number },
  rating: { type: String },
  duration: { type: String },
  listed_in: { type: [String] },
  description: { type: String },
  type: { type: String }
});


export const NetflixTitle = mongoose.model('NetflixTitle', netflixTitleSchema);

