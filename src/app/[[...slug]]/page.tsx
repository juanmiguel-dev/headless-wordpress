import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";
import { setSeoData } from "@/utils/seoData";
import TechStack from "@/components/TechStack";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentInfoQuery } from "@/queries/general/ContentInfoQuery";
import { ContentNode } from "@/gql/graphql";
import PageTemplate from "@/components/Templates/Page/PageTemplate";
import { nextSlugToWpSlug } from "@/utils/nextSlugToWpSlug";
import PostTemplate from "@/components/Templates/Post/PostTemplate";
import { SeoQuery } from "@/queries/general/SeoQuery";
import OnePageTemplate from "@/components/Templates/OnePage/OnePageTemplate";
import { PortfolioQuery } from "@/queries/general/PortfolioQuery";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: paramsSlug } = await params;
  const slug = nextSlugToWpSlug(paramsSlug);
  const isPreview = slug.includes("preview");

  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(SeoQuery),
    {
      slug: isPreview ? slug.split("preview/")[1] : slug,
      idType: isPreview ? "DATABASE_ID" : "URI",
    },
  );

  if (!contentNode) {
    return notFound();
  }

  // const metadata = setSeoData({ seo: contentNode.seo });

  return {
    // ...metadata,
    title: slug, // Fallback title
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${slug}`,
    },
  } as Metadata;
}

import { AllSlugsQuery } from "@/queries/general/AllSlugsQuery";

// ... (resto de las importaciones y código)

export async function generateStaticParams() {
  try {
    const { posts, pages } = await fetchGraphQL<{ posts: { nodes: { slug: string }[] }; pages: { nodes: { slug: string }[] } }>(
      AllSlugsQuery,
    );

    const allSlugs = [...posts.nodes, ...pages.nodes].map((node) => ({
      slug: node.slug === "/" ? [] : node.slug.split("/"),
    }));

    return allSlugs;
  } catch (error) {
    console.error("Error fetching slugs for generateStaticParams:", error);
    // Devolver un array vacío para evitar que la compilación falle
    return [];
  }
}

export default async function Page({ params }: Props) {
  const { slug: paramsSlug } = await params;
  const slug = nextSlugToWpSlug(paramsSlug);
  const isPreview = slug.includes("preview");
  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(ContentInfoQuery),
    {
      slug: isPreview ? slug.split("preview/")[1] : slug,
      idType: isPreview ? "DATABASE_ID" : "URI",
    },
  );

  let posts = [];
  if (slug === "/") {
    const portfolioData = await fetchGraphQL<{ posts: { nodes: any[] } }>(
      print(PortfolioQuery)
    );
    posts = portfolioData?.posts?.nodes || [];
  }

  if (!contentNode) return notFound();

  switch (contentNode.contentTypeName) {
    case "page":
      if (slug === "/") {
        return <OnePageTemplate node={contentNode} posts={posts} />;
      }
      return <PageTemplate node={contentNode} />;
    case "post":
      return <PostTemplate node={contentNode} />;
    default:
      return <p>{contentNode.contentTypeName} not implemented</p>;
  }
}
