import { NextRequest, NextResponse } from "next/server";
import { db } from "@/src/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authHeader = req.headers.get("authorization");
  const adminToken = process.env.ADMIN_SECRET;

  if (!adminToken || authHeader !== `Bearer ${adminToken}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const submissionId = parseInt(id, 10);
  if (isNaN(submissionId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const body = await req.json();
  const readVal = body.read ? 1 : 0;

  db.prepare(`UPDATE ContactSubmission SET read = ? WHERE id = ?`).run(
    readVal,
    submissionId
  );

  const submission = db
    .prepare(`SELECT * FROM ContactSubmission WHERE id = ?`)
    .get(submissionId);

  return NextResponse.json(submission);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authHeader = req.headers.get("authorization");
  const adminToken = process.env.ADMIN_SECRET;

  if (!adminToken || authHeader !== `Bearer ${adminToken}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const submissionId = parseInt(id, 10);
  if (isNaN(submissionId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  db.prepare(`DELETE FROM ContactSubmission WHERE id = ?`).run(submissionId);

  return NextResponse.json({ success: true });
}
