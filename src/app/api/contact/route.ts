import { NextResponse } from "next/server";

// Basic email regex for sanity checks
const EMAIL_RE = /[^\s@]+@[^\s@]+\.[^\s@]{2,}/i;

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const date = String(body?.date ?? "").trim();
    const time = String(body?.time ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const source = String(body?.source ?? "web");

    const errors: Record<string, string> = {};
    if (!name || name.length < 2) errors.name = "Name is required";
    if (!EMAIL_RE.test(email)) errors.email = "Valid email is required";
    if (!date) errors.date = "Date is required";
    if (!time) errors.time = "Time is required";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { ok: false, message: "Validation failed", errors },
        { status: 422 }
      );
    }

    // TODO: Integrate with your CRM, email service, or database here.
    // For now, just echo back a success.
    return NextResponse.json(
      {
        ok: true,
        message: "Inquiry received. Our advisor will contact you shortly.",
        data: { name, email, phone, date, time, message, source },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("/api/contact error:", err);
    return NextResponse.json(
      { ok: false, message: "Unexpected error. Please try again later." },
      { status: 500 }
    );
  }
}
