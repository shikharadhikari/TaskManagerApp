import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import notFound from './middleware/notFound.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';
import cors from "cors"
import authRoutes from './routes/authRoutes.js';

const app = express()
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.use(notFound);
app.use(globalErrorHandler);

export default app;