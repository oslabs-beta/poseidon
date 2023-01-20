import mongoose from 'mongoose';
import getConfig from 'next/config'

mongoose.set('strictQuery', false);

// const URI = "mongodb+srv://xtchow:poseidon@cluster0.lkfnb5l.mongodb.net/?retryWrites=true&w=majority"

const { serverRuntimeConfig } = getConfig()

const connectMongo = async () => mongoose.connect(serverRuntimeConfig.MONGO_URI);

export default connectMongo;