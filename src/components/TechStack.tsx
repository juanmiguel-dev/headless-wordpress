import React from "react";

const TechStack = () => {
    const stack = [
        {
            category: "Frontend Architecture",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            tools: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS"],
        },
        {
            category: "Headless Backend",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            tools: ["WordPress Core", "WPGraphQL Schema", "ACF (Custom Fields)", "Headless CMS Mode"],
        },
        {
            category: "DevOps & CI/CD",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            tools: ["Vercel Deployment", "GitHub Actions", "GraphQL Codegen", "Strict Type Safety"],
        },
        {
            category: "Performance",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            tools: ["Core Web Vitals 100", "ISR Strategy", "Image Optimization", "Static Edge Caching"],
        },
    ];

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Enterprise-Grade
                        </span>{" "}
                        Tech Stack
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Built for scalability. I combine the robustness of industry-standard
                        tools with the speed of modern frameworks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stack.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300 shadow-lg group"
                        >
                            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-600 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-100">
                                {item.category}
                            </h3>
                            <ul className="space-y-2">
                                {item.tools.map((tool, idx) => (
                                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;