import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const loginOrSignup = async (req, res) => {
  const { username } = req.body;

  if (!username) return res.status(400).json({ message: 'Username is required.' });

  let user = await User.findOne({ username });
  if (!user) {
    user = new User({ username });
    await user.save();
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.status(200).json({ user, token });
};