import mongoose from 'mongoose';
import getConfig from 'next/config'

mongoose.set('strictQuery', false);

const { serverRuntimeConfig } = getConfig()

const connectMongo = async () => mongoose.connect(serverRuntimeConfig.MONGO_URI);

export default connectMongo;