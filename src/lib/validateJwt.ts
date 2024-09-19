import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET
export async function validateJwt(token:string){
    try{
        //convert to Uint8Array
        const secretKey = new TextEncoder().encode(JWT_SECRET);

        //Verify and decode theJWT

        const {payload} = await jwtVerify(token,secretKey)

        //return decode payload
        return {valid:true,user:payload};
    }catch(error){
        return {valid:false}
    }
}