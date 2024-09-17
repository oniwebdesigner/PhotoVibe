import { NextResponse } from "next/server";
import pool from "@/hook/db";
import bcrypt from 'bcryptjs';

export async function GET() {
    try {
        const db = await pool.getConnection();
        const query = 'SELECT * FROM users';
        const [rows] = await db.execute(query);
        db.release();

        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: 'error fetching users' }, { status: 500 });
    }
}


export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);

        const db = await pool.getConnection();
        const emailQuery = 'SELECT * FROM USERS where email = ?';
        const [emailResult] = await db.execute(emailQuery,[email]);
        if(emailResult.length > 0){
            return NextResponse.json({'message':'User already exist!'},{status:409})
        }
        const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        const [result] = await db.execute(query, [name, email, hashedPassword]);
        const userId = result.insertId;

        const selectQuery = 'SELECT * FROM users WHERE id = ?';
        const [userRows] = await db.execute(selectQuery, [userId]);

        db.release();
        if (userRows.length > 0) {
            return NextResponse.json({ user: userRows[0] }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Error create user' }, { status: 500 });
    }
}