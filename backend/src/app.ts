import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(errorHandler);
export default app;
