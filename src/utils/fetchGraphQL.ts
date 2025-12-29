import { draftMode, cookies } from "next/headers";

export async function fetchGraphQL<T = any>(
  query: string,
  variables?: { [key: string]: any },
  headers?: { [key: string]: string },
): Promise<T> {
  let preview = false;
  try {
    const draftModeResult = await draftMode();
    preview = draftModeResult.isEnabled;
  } catch (e) {
    // draftMode() throws an error if called outside a request scope (e.g., during build)
    // In this case, we disable preview mode.
    preview = false;
  }

  try {
    let authHeader = "";
    if (preview) {
      try {
        const auth = (await cookies()).get("wp_jwt")?.value;
        if (auth) {
          authHeader = `Bearer ${auth}`;
        }
      } catch (e) {
        // cookies() might also throw an error if called outside a request scope
        // In this case, we proceed without authentication.
        console.warn("Could not access cookies for draft mode authentication:", e);
      }
    }

    const body = JSON.stringify({
      query,
      variables: {
        preview,
        ...variables,
      },
    });

    const response = await fetch(
      process.env.WORDPRESS_GRAPHQL_ENDPOINT || `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authHeader && { Authorization: authHeader }),
          ...headers,
        },
        body,
        cache: preview ? "no-cache" : "default",
        next: {
          tags: ["wordpress"],
        },
      },
    );

    if (!response.ok) {
      console.error("Response Status:", response);
      throw new Error(response.statusText);
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL Errors:", data.errors);
      throw new Error("Error executing GraphQL query");
    }

    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
