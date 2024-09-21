/** @type {import('next').NextConfig} */
const nextConfig = {
    // Lejo domenet që mund të ngarkojnë imazhe
    images: {
      domains: ['localhost'], //Add domain
      domains: ['flowbite.s3.amazonaws.com'],
      domains: ['madebydesignesia.com', 'flowbite.s3.amazonaws.com'],
    },
    

    api: {
      bodyParser: false,
    },
  
   
  };
  
  export default nextConfig;
  