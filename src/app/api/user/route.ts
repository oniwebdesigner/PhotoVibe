import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = prisma.user.findMany
        return NextResponse.json({users},{status:200});
    } catch (error) {
        return NextResponse.json({ error: 'error fetching users' }, { status: 500 });
    }
}


export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json();
      
        const hashedPassword = await bcrypt.hash(password, 10);
      
        const findEmail = await prisma.user.findFirst({
            where: {
              email: email,
            },
          });
      
        if (findEmail) {
          return NextResponse.json(
            { message: 'User Already Exists',},
            { status: 409 }
          );
        }
      
        const user = await prisma.user.create({
          data: {
            name: name,
            email: email,
            password: hashedPassword,
          },
        });
      
        return NextResponse.json({ user }, { status: 201 });
      
      } catch (error) {
        console.error('Error creating user:', error); // Log the actual error
        return NextResponse.json(
          { message: `An error occurred: ${error.message}` }, // Include the error message in the response
          { status: 500 }
        );
      }
}