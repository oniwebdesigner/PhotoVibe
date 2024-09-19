import { jwtVerify } from "jose";


export async function validateJwt(token:string,secret:string){
    try{
        //convert to Uint8Array
        const secretKey = new TextEncoder().encode(secret);

        //Verify and decode theJWT

        const {payload} = await jwtVerify(token,secretKey)

        //return decode payload
        return {valid:true,user:payload};
    }catch(error){
        return {valid:false}
    }
}