import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = await prisma.user.findMany({
            select: {
              id: true,
              name: true,
              avatar: true,
              email: true,
            },
          });
        return NextResponse.json({users},{status:200});
    } catch (error) {
        return NextResponse.json({ error: 'error fetching users' }, { status: 500 });
    }
}

