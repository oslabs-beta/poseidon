import mongoose from 'mongoose';
const URI = process.env.MONGO_URI;
// const URI = process.env.local.MONGO_URI;
const connectMongo = async () => mongoose.connect(URI);

export default connectMongo;