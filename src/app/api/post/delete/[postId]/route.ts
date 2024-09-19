import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
import { validateJwt } from "lib/validateJwt";

const prisma = new PrismaClient();


export async function DELETE(req:NextRequest,{params}:{params:{postId:string}}){
    try {
        const { postId } = params;
        const id = parseInt(postId);

        //Extraxt the Authorization header
        const authHeader = req.headers.get('Authorization');
        if(!authHeader || !authHeader?.startsWith('Bearer ')){
            return NextResponse.json({'message': 'Unauthorized'},{status:401});
        }

        //Get the Token from Authorization header
        const token = authHeader.split(' ')[1];

        //Validate the jwt token and get the authenticated user
        const {valid , user} = await validateJwt(token);

        if(!valid || !user){
            return NextResponse.json({'message': 'Invalid token'},{status:401});
        }

        const authUser = user;

        const post = await prisma.post.findUnique({
          where: { id: id },
        });

        if (!post) {
          return NextResponse.json({ message: 'Post not found' }, { status: 404 });
        }

        //check if the authenticate user is the author of the post
        if (post.authorId !== authUser.id){
            return NextResponse.json({'message':'Unauthorized to delete this post'},{status:403});
        }

        await prisma.post.delete({
            where:{id:id}
        });

        return NextResponse.json({'message': 'Post deleted successfully'},{status:200});
      } catch (error) {
        console.error('Error finding Post:', error);
        return NextResponse.json({ message: 'Error finding Post' }, { status: 500 });
      }
}