import express from 'express';
import {uploadVideo,allvideos,getvideoById,getAllVideosuserid} from '../Controllers/video.js'; 
import auth from '../Middleware/authentication.js'

const router = express.Router();


router.post('/video',auth,uploadVideo)
router.get('/allvideos', allvideos);
router.get('/getvideoById/:id', getvideoById);
router.get('/:userid/channel',  getAllVideosuserid);



export default router;