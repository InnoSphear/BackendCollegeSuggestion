import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://innosphear:ujjwal@cluster0.vqzto1i.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
  }
};

export default connectDb;
