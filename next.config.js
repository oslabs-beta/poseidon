/** @type {import('next').NextConfig} */
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    MONGO_URI: process.env.MONGO_URI,
    DEPLOYED_CLUSTER_IP: process.env.DEPLOYED_CLUSTER_IP, // Pass through env variables
    LOCAL_CLUSTER_IP: process.env.LOCAL_CLUSTER_IP,
    LOCAL_CLUSTER_NAME: process.env.LOCAL_CLUSTER_NAME,
    DEPLOYED_CLUSTER_NAME: process.env.DEPLOYED_CLUSTER_NAME,
    DEPLOYED_CLUSTER_NAME_2: process.env.DEPLOYED_CLUSTER_NAME_2,

  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    KUBECOST_IP: process.env.KUBECOST_IP,
  },
};
