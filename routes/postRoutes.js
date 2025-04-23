import express from 'express';
import {
  getAllPosts,
  getUserPosts,
  getLikedPosts,
  searchPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/postController.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/user/:userId', getUserPosts);
router.get('/liked/:userId', getLikedPosts);
router.get('/search', searchPosts);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.post('/:id/like', likePost);

export default router;