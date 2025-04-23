import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  content: { type: String, required: true },
  severity: { type: String, enum: ['normal', 'too much', 'extreme'], required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Post', PostSchema);
