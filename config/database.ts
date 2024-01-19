import mongoose from "mongoose"

const database = async () => {
  try {
    await mongoose.connect('mongodb://localhost:5000/image-upload', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default database;
