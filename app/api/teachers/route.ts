import dbConnect from "@/db/db";
import Teachers from "@/db/teacherSchema";
import {NextResponse} from "next/server";

export async function GET(req: Request) {
    await dbConnect();
    const teachers = await Teachers.find({});
    return NextResponse.json(teachers, {status: 200});
}
