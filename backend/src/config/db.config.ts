import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGO_URI as string;
    if (!uri) throw new Error('Mongo Uri not defined');

    await mongoose.connect(uri);
    console.log('success to connected database');
  } catch (error) {
    console.error('Mongo DB connection error', error);
    process.exit(1);
  }
};
