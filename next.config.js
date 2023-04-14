module.exports = {
  reactStrictMode: true,
  // images: {
  //   loader: 'imgix',
  //   path: "",
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'internetcomputer.today',
        port: '',
      },
    ],
  },
  
  trailingSlash: true,
  // exportPathMap: async function () {
  //   return {
  //     '/': { page: '/' },
  //     '/games': { page: '/games' },
  //   }
  // },
}