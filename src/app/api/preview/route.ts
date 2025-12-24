import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const id = searchParams.get("id");
  const slug = searchParams.get("slug");
  const postType = searchParams.get("postType");

  // Si quieres seguridad extra, aquí podrías comprobar una clave secreta
  // if (secret !== process.env.WORDPRESS_PREVIEW_SECRET) {
  //   return new Response("Invalid token", { status: 401 });
  // }

  if (!id && !slug) {
    return new Response("Missing id or slug", { status: 401 });
  }

  // Activamos el modo borrador (Async para Next.js 15/16)
  const draft = await draftMode();
  draft.enable();

  // Redirigimos al post
  // Si es la home, redirige a la raíz, si no al slug
  const redirectUrl = slug === "/" || !slug ? "/" : `/${slug}`;

  return NextResponse.redirect(new URL(redirectUrl, request.url));
}