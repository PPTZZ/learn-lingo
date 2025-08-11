import dbConnect from "@/db/db";

export async function GET(req: Request) {
  await dbConnect();

}
