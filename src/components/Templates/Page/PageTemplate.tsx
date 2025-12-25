import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PageQuery } from "./PageQuery";

interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });

  return (
    <main className="max-w-4xl mx-auto py-32 px-6 min-h-screen">
      <div
        className="prose prose-invert max-w-none industrial-content"
        dangerouslySetInnerHTML={{ __html: page?.content || "" }}
      />
    </main>
  );
}
