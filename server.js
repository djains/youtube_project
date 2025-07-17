import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import './Connection/conn.js';
import authRouter from './Routes/user.js';
import videoRoutes from './Routes/video.js';
import commentRoutes from './Routes/comment.js';

const app = express();
const port = 4000;

// ✅ ONLY THIS CONFIG WORKS WITH COOKIES
const corsOptions = {
  origin: 'http://localhost:5173',   // frontend origin
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/api', videoRoutes);
app.use('/comments', commentRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
