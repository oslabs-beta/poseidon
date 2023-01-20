/** @type {import('next').NextConfig} */
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    MONGO_URI: process.env.MONGO_URI, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
}
