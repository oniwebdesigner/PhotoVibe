/** @type {import('next').NextConfig} */
const nextConfig = {
    // Lejo domenet që mund të ngarkojnë imazhe
    images: {
      domains: ['localhost'], //Add domain
    },
    

    api: {
      bodyParser: false,
    },
  
   
  };
  
  export default nextConfig;
  