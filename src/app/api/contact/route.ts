import { NextResponse } from "next/server";
import { sendQueryEmail, ContactFormData } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const { name, email, phone, inquiryType, message } = body;

    // Basic server-side validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required form fields (name, email, phone, message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Send the email
    await sendQueryEmail({
      name,
      email,
      phone,
      inquiryType: inquiryType || "general",
      message,
    });

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully and email sent." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      {
        error: "Failed to send email enquiry. Please try again later or contact us directly.",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
