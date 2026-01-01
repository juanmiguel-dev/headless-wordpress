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
import { ProjectsQuery } from "@/queries/general/ProjectsQuery";
import { SingleProjectQuery } from "@/queries/project/SingleProjectQuery";

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
    const { posts, pages, projects } = await fetchGraphQL<{ posts: { nodes: { slug: string }[] }; pages: { nodes: { slug: string }[] }; projects: { nodes: { slug: string }[] } }>(
      print(AllSlugsQuery),
    );

    const allSlugs = [
      ...posts.nodes.map((node) => ({
        slug: node.slug === "/" ? [] : node.slug.split("/"),
      })),
      ...pages.nodes.map((node) => ({
        slug: node.slug === "/" ? [] : node.slug.split("/"),
      })),
      ...projects.nodes.map((node) => ({
        slug: ["projects", node.slug],
      })),
    ];

    console.log("Generated Slugs:", allSlugs);

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

  let projects = [];
  if (slug === "/") {
    const projectsData = await fetchGraphQL<{ projects: { nodes: any[] } }>(
      print(ProjectsQuery)
    );
    projects = projectsData?.projects?.nodes || [];
  }

  if (!contentNode) return notFound();

  // Check if it's a project page
  if (paramsSlug && paramsSlug[0] === 'projects') {
    const projectSlug = paramsSlug[1];
    const { project } = await fetchGraphQL<{ project: ContentNode }>(
      print(SingleProjectQuery),
      {
        id: projectSlug,
        idType: "SLUG",
      },
    );

    if (project) {
      return <PostTemplate node={project} label="PROJECT" />;
    }
  }

  switch (contentNode.contentTypeName) {
    case "page":
      if (slug === "/") {
        return <OnePageTemplate node={contentNode} projects={projects} />;
      }
      return <PageTemplate node={contentNode} />;
    case "post":
      return <PostTemplate node={contentNode} />;
    default:
      return <p>{contentNode.contentTypeName} not implemented</p>;
  }
}
