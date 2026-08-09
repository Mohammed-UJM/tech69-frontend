import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const productDirectory = path.join(process.cwd(), "public", "products", id);

  if (!fs.existsSync(productDirectory)) {
    return NextResponse.json([]);
  }

  const files = fs
    .readdirSync(productDirectory)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) => {
      const numberA = parseInt(a.match(/-(\d+)\./)?.[1] || "0");
      const numberB = parseInt(b.match(/-(\d+)\./)?.[1] || "0");

      return numberA - numberB;
    });

  const images = files.map((file) => `/products/${id}/${file}`);

  return NextResponse.json(images);
}
