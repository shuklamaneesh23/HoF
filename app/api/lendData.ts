import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

export async function GET() {
    const file = await fs.readFile(process.cwd() + '/public/Lend.json', 'utf8');
    return NextResponse.json(file);  
  }