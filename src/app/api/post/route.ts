import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';
import path from 'path';


const prisma = new PrismaClient();

export const config = {
    api: {
      bodyParser: false,
    },
  };

export async function GET(){
    try{
        const posts = await prisma.post.findMany
        return NextResponse.json({posts},{status:200});
    }catch (error) {
        return NextResponse.json({ error: 'error fetching posts' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const formData = await request.formData();
    
    const authorId = formData.get('authorId') as string;
    const title = formData.get('title') as string;
    const image = formData.get('image') as File;
  
    // Validation errors collection
    const errors: { [key: string]: string } = {};
  
    // Validate title
    if (!title) {
      errors.title = "Title is required.";
    } else if (title.length < 3) {
      errors.title = "Title must be at least 3 characters.";
    } else if (title.length > 255) {
      errors.title = "Title must not exceed 255 characters.";
    }
  
    // Validate authorId (check if it's a number)
    if (!authorId) {
      errors.authorId = "Author is required.";
    } else if (isNaN(Number(authorId))) {
      errors.authorId = "Author ID must be a valid number.";
    }
  
    // Validate image
    if (!image) {
      errors.image = "Image is required.";
    } else if (!['image/jpeg', 'image/png', 'image/gif'].includes(image.type)) {
      errors.image = "Invalid image type. Only JPEG, PNG, and GIF are allowed.";
    } else if (image.size > 2 * 1024 * 1024) {  // Max 2MB file size
      errors.image = "Image size must be less than 2MB.";
    }
  
    // If there are any validation errors, return them
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }
  
    // If everything is fine, proceed with your logic
    return NextResponse.json({ success: true, message: "Validation passed!" });
  }