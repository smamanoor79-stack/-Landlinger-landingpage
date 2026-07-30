import { connectDB } from "@/lib/db";
import Newsletter from "@/models/Newsletter";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    await connectDB();

    await Newsletter.findOneAndUpdate(
      { email },
      { email },
      { upsert: true, new: true }
    );

    return Response.json({ success: true });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}