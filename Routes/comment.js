import express from 'express';
import { addComment, getComments } from '../Controllers/comment.js';
import auth from '../Middleware/authentication.js'

const router = express.Router();

// Add comment (protected route)
router.post('/add', auth, addComment);
router.get('/:videoId', getComments);

export default router;
