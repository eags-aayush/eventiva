import mongoose from 'mongoose';

// Define schema
const eventSchema = new mongoose.Schema({
  image: String,
  title: String,
  performer: String,
  description: String,
  date: String,
  venue: String,
  duration: String,
  price: String
});

// Create model
const Event = mongoose.model('Event', eventSchema);

// ✅ Export directly
export default Event;
