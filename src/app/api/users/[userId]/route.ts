import { NextRequest, NextResponse } from "next/server";
import pool from "@/hook/db";


export async function GET(
    request:  NextRequest,
    { params }: { params: { userId: string } }
) {
    const id = params.userId
    
    try {
        const db = await pool.getConnection()        
        
        const query = 'select * from users where id = ?'
        const [rows] = await db.execute(query,[id])
        db.release()
        
        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}