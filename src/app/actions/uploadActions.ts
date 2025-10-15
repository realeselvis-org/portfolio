// ✅ Esto se queda igual: imports y setup
"use server";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ✅ Route Handler REAL (/api/... - solo accesible por HTTP)
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("imageFile") as File | null;

  if (!file) {
    return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 });
  }

  const fileExtension = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExtension}`;
  const bucketName = "project-images";

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(fileName, buffer, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(fileName);

  return NextResponse.json({
    success: true,
    imageUrl: urlData.publicUrl,
  });
}

// 🚀 SI quieres importarla en componentes como una ACTION
export async function uploadProjectImage(formData: FormData) {
  const res = await fetch("/api/tu-endpoint", {
    method: "POST",
    body: formData,
  });

  return res.json();
}
