import { print } from "graphql/language/printer";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { AllProjectsQuery } from "@/queries/project/AllProjectsQuery";
import ProjectsGrid from "@/components/Projects/ProjectsGrid";
import Footer from "@/components/Globals/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Archive | Pachadev",
  description: "Explora nuestro archivo de proyectos de arquitectura digital y desarrollo headless.",
};

export default async function ProjectsPage() {
  const { projects } = await fetchGraphQL<{ projects: { nodes: any[] } }>(
    print(AllProjectsQuery)
  );

  return (
    <main className="min-h-screen bg-black text-white selection:bg-neon-lime selection:text-black">
      
      {/* Header Section */}
      <section className="relative pt-40 pb-20 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <span className="block font-mono text-neon-lime text-xs mb-4 tracking-[0.2em]">
                // SYSTEM_DIRECTORY
              </span>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
                PROJECTS<br/>
                <span className="text-transparent stroke-white stroke-1 opacity-50" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                  2026
                </span>
              </h1>
            </div>
         
          </div>
        </div>

        {/* Decorative Grid Background */}
        <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
      </section>

      {/* Projects Grid */}
      <ProjectsGrid projects={projects?.nodes || []} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
