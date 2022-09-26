// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
if (process.env.NODE_ENV === 'development') {
  console.log('info  - developUrl:', `http://${require('address').ip()}:3000`)
}
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseURL: process.env.API_URL ,
  },
  eslint: {
    dirs: ['src']
  },
  typescript: { ignoreBuildErrors: true },
 
}

module.exports = nextConfig
