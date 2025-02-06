import mongoose from 'mongoose';

const DB_USER: string = 'matikomikola';
const DB_PASSWORD: string = 'IpPjaJdW7jxYX9R5';
const MONGO_URI: string = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@99techteam.npxlb.mongodb.net/`;

const mongooseConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`✅ MongoDB connected successfully`);
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default mongooseConnection;
