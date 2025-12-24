// @ts-nocheck
// BUILD_VERSION: 1.0.2 - FORCED_REVALIDATE_FIX
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function PUT(request: NextRequest) {
  const requestBody = await request.text();
  const { paths, tags } = requestBody
    ? JSON.parse(requestBody)
    : { paths: [], tags: [] };
  let revalidated = false;

  if (
    request.headers.get("X-Headless-Secret-Key") !== process.env.HEADLESS_SECRET
  ) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    if (paths && Array.isArray(paths) && paths.length > 0) {
      paths.forEach((path) => (revalidatePath as any)(path));
      console.log("Revalidated paths:", paths);
      revalidated = true;
    }

    if (tags && Array.isArray(tags) && tags.length > 0) {
      tags.forEach((tag) => (revalidateTag as any)(tag));
      console.log("Revalidated tags:", tags);
      revalidated = true;
    }



    return NextResponse.json({
      revalidated,
      now: Date.now(),
      paths,
      tags: tags,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error revalidating paths or tags" },
      { status: 500 },
    );
  }
}
