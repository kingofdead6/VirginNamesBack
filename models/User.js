import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  pfp: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', UserSchema);