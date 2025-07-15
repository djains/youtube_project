import express from 'express';
import './Connection/conn.js';
import authRouter from './Routes/user.js';
import videoRoutes from './Routes/video.js';
import commentRoutes from './Routes/comment.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const port = 4000;
app.use(cors({
    origin: 'http://localhost:5173',    
    credentials: true
}));


app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/api', videoRoutes);
app.use('/comments', commentRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
