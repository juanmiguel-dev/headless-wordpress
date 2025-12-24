import Link from "next/link";
import Image from "next/image";

interface Post {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    featuredImage?: {
        node: {
            sourceUrl: string;
            altText: string;
        };
    };
}

interface PortfolioProps {
    posts: Post[];
}

export default function Portfolio({ posts }: PortfolioProps) {
    return (
        <section id="portfolio" className="bg-dark-bg py-24 text-white border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">KeyPoints</h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Tech Stack & Tools
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="group relative overflow-hidden rounded-none border border-gray-800 bg-gray-900/50 transition-all hover:border-neon-lime hover:shadow-[0_0_20px_rgba(223,255,0,0.2)]"
                        >
                            {/* Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                                {post.featuredImage?.node?.sourceUrl ? (
                                    <Image
                                        src={post.featuredImage.node.sourceUrl}
                                        alt={post.featuredImage.node.altText || post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        unoptimized={true}
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-slate-700">
                                        <span className="text-slate-500">No Image</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-3 flex items-center gap-2 text-sm text-neon-lime font-mono">
                                    <span>{new Date(post.date).toLocaleDateString()}</span>
                                </div>
                                <h3 className="mb-3 text-2xl font-black uppercase leading-tight group-hover:text-neon-lime text-white transition-colors">
                                    <Link href={`/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <div
                                    className="line-clamp-3 text-gray-400 text-sm font-light leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
