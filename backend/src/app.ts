import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

// global route
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(errorHandler);
export default app;
