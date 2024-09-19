import { jwtVerify } from 'jose';
import { NextRequest} from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function authUser(req: NextRequest) {
    // Extract the Authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return { valid: false, user: null };
    }

    // Get the token from Authorization header
    const token = authHeader.split(' ')[1];

    try {
        // Convert to Uint8Array
        const secretKey = new TextEncoder().encode(JWT_SECRET);

        // Verify and decode the JWT
        const { payload } = await jwtVerify(token, secretKey);

        // Return decoded payload
        return { valid: true, user: payload };
    } catch (error) {
        console.error('Error verifying JWT:', error);
        return { valid: false, user: null };
    }
}
