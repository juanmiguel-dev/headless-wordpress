import { ContentNode } from "@/gql/graphql";
import Hero from "@/components/OnePage/Hero";
import Services from "@/components/OnePage/Services";
import Portfolio from "@/components/OnePage/Portfolio";
import Phone3D from "@/components/OnePage/Phone3D/Phone3D";
import Footer from "@/components/Globals/Footer/Footer";

interface OnePageTemplateProps {
    node?: ContentNode; // Optional, in case we want to pass data later
    projects?: any[];
}

export default function OnePageTemplate({ node, projects = [] }: OnePageTemplateProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Services />
            <Portfolio projects={projects} />
            <Phone3D />
            <Footer />
        </div>
    );
}
