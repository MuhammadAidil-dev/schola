import dotenv from 'dotenv';
import { connectDB } from './config/db.config';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
  try {
    await connectDB(); // connect to mongoDB
    app.listen(PORT, () => {
      console.log(`Server listening on PORT ${PORT}`);
    });
  } catch (error) {
    console.error('Failed connect to server: ', error);
    process.exit(1);
  }
};

startServer();
