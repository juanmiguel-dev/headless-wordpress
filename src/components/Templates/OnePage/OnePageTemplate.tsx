import { ContentNode } from "@/gql/graphql";
import Hero from "@/components/OnePage/Hero";
import Services from "@/components/OnePage/Services";
import Portfolio from "@/components/OnePage/Portfolio";

interface OnePageTemplateProps {
    node?: ContentNode; // Optional, in case we want to pass data later
    posts?: any[];
}

export default function OnePageTemplate({ node, posts = [] }: OnePageTemplateProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Services />
            <Portfolio posts={posts} />
            {/* Additional sections can be added here */}
        </div>
    );
}
