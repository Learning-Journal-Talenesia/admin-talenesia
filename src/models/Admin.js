// models/Admin.js
import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  password: String,
  role: String,
});

export default mongoose.models.Account || mongoose.model('Account', AdminSchema, 'account');
