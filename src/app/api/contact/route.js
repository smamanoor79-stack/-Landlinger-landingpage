import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { sendContactEmail } from "@/lib/email";
import Contact from "@/models/Contact";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are all required." },
        { status: 400 }
      );
    }

    // Save to MongoDB (optional but useful for a record of submissions)
    try {
      await connectDB();
      await Contact.create({ name, email, message });
    } catch (dbError) {
      // Don't block the email from sending just because the DB save failed
      console.error("Failed to save contact submission to DB:", dbError);
    }

    // Send the actual email via Nodemailer
    await sendContactEmail({ name, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
