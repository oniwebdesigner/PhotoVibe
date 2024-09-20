
## PhotoStudio

PhotoStudio is a web application build with Next.js that allows photographers to showcase their profesional images. The app provides user authentication via JWT, allowing user to signup login and manage their profile. Authenticated users can upload their professional images to be displayed publicly.

## Features

- Prisma: Easy way to defind your table in database
- Next.js: Fullstack framework used for both frontend and API.
- User Authentication: Secure login and signup system using JWT (JSON WEB TOKEN).
- Image Management: Authenticated users can upload and display thei professional images.
- Middleware: Secure authorization routes.

## Technologies Used

- Next.js: React framework for server-side rendering and API integration.
- Prisma: Provide tools to interact easly with your database
- JWT (JSON Web Tokens): Used for secure user authentication.
- MySQL: Database for storing user and image data.
- TypeScript: Ensures type safety across the project.
- bcryptjs: Password hashing for secure login.
- jose: A framework for signing and encrypting JSON-based data structures, commonly used for handling secure token-based authentication, such as JWT (JSON Web Token).

## Getting Started
Installation
1. Clone the repository
```bash
git clone https://github.com/almant12/photostudio1.git
cd photostudio1
```

2. Install the dependencies:
```bash
npm install
```

3. Copy .env.example file to .env to config your database and store the unique JWT_SECRET key
```bash
cp .env.example .env
```

4. Run the database migrations
```bash
npx prisma migrate dev --name init
```

5. Start the development server, run:
```bash
npm run dev
```






