import type { Metadata } from "next";
import { print } from "graphql/language/printer";

import { setSeoData } from "@/utils/seoData";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentNode, Page } from "@/gql/graphql";
import { PageQuery } from "@/components/Templates/Page/PageQuery";
import { SeoQuery } from "@/queries/general/SeoQuery";

const notFoundPageWordPressId = 501;

export async function generateMetadata(): Promise<Metadata> {
  // SEO fields are currently disabled
  // const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
  //   print(SeoQuery),
  //   { slug: notFoundPageWordPressId, idType: "DATABASE_ID" },
  // );

  // const metadata = setSeoData({ seo: contentNode.seo });

  return {
    // ...metadata,
    title: "Not Found",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/404-not-found/`,
    },
  } as Metadata;
}

export default async function NotFound() {
  const data = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: notFoundPageWordPressId,
  });

  return <div dangerouslySetInnerHTML={{ __html: data?.page?.content || "<h1>404 - Not Found</h1>" }} />;
}
