/** @type {import('next').NextConfig} */
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    MONGO_URI: process.env.MONGO_URI,
    DEPLOYED_CLUSTER_IP: process.env.DEPLOYED_CLUSTER_IP, // Pass through env variables
    LOCAL_CLUSTER_IP: process.env.LOCAL_CLUSTER_IP,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
};
