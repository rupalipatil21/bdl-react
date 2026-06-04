import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session = req.headers.get("cookie")?.includes("session=valid");

  if (session) {
    return NextResponse.json({ valid: true });
  }

  return NextResponse.json({ valid: false }, { status: 401 });
}
