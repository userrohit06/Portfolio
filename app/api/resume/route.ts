import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "Rohit_Khatri_Resume.pdf",
    );
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=Rohit_Khatri_Resume.pdf",
      },
    });
  } catch (error) {
    return new NextResponse("File not found", { status: 404 });
  }
}
