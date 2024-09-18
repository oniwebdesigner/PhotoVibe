import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';


export async function saveImage(image: File): Promise<string> {
  // Ensure the uploads directory exists
  const uploadsDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Generate a unique file name
  const ext = path.extname(image.name);
  const filename = `${uuidv4()}${ext}`;

  // Create the full path to save the image
  const filePath = path.join(uploadsDir, filename);

  // Convert the image Blob into a Buffer
  const arrayBuffer = await image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Save the file to the public/uploads directory
  fs.writeFileSync(filePath, buffer);

  // Return the file path relative to the public directory
  return `public/images/${filename}`;
}

export async function deleteImage(fileName:string):Promise<void>{
    try{
        fs.unlinkSync(fileName);
    }catch(error){
        console.error('Failed To Delete Image',error)
    }
}

