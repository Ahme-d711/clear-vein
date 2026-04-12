import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import SubscribeSubmission from "@/models/SubscribeSubmission";
import { SubscribePostSchema } from "@/lib/validations/subscribe.schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = SubscribePostSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid data", errors: parsed.error.format() },
        { status: 400 }
      );
    }

    await connectDB();
    await SubscribeSubmission.create({
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      description: parsed.data.description ?? "",
      role: parsed.data.role,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("API_SUBSCRIBE_POST", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

/** Dashboard: recent subscription sign-ups (newest first). */
export async function GET() {
  try {
    await connectDB();
    const rows = await SubscribeSubmission.find()
      .sort({ createdAt: -1 })
      .limit(200)
      .select("fullName email description role createdAt")
      .lean();

    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error("API_SUBSCRIBE_GET", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
