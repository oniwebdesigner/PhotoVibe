import { NextResponse } from "next/server";
import pool from "@/hook/db";

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

// Metoda POST për të krijuar një përdorues të ri
export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        const db = await pool.getConnection();
        const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        const [result] = await db.execute(query, [name, email, password]);
        db.release();

        return NextResponse.json({ message: 'User Successfully Created', userId: result.insertId });
    } catch (error) {
        return NextResponse.json({ error: 'Error create user' }, { status: 500 });
    }
}