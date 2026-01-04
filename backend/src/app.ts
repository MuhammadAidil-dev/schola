import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// global route
app.use('/api', routes);

app.use(errorHandler);
export default app;
