import mongoose from 'mongoose';
import getConfig from 'next/config'

/* Mongoose has a strict query mode that is enabled by default. This mode requires that you specify a
query filter for all update() and remove() operations. */
mongoose.set('strictQuery', false);

/* It's getting the server runtime config from the `next.config.js` file. */
const { serverRuntimeConfig } = getConfig()

/**
 * It connects to MongoDB using the URI stored in the serverRuntimeConfig object
 */
const connectMongo = async () => mongoose.connect(serverRuntimeConfig.MONGO_URI);

export default connectMongo;