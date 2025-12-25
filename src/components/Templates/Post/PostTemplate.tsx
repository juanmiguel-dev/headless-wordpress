import { print } from "graphql/language/printer";
import Image from "next/image";
import * as motion from "framer-motion/client";

import { ContentNode, Post } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";

import styles from "./PostTemplate.module.css";
import { PostQuery } from "./PostQuery";
import BackgroundSlideshow from "./BackgroundSlideshow";
import RelatedPostsSlider from "./RelatedPostsSlider";

interface TemplateProps {
  node: ContentNode;
}

export default async function PostTemplate({ node }: TemplateProps) {
  const { post, posts } = await fetchGraphQL<{ post: Post; posts: { nodes: any[] } }>(print(PostQuery), {
    id: node.databaseId,
  });

  if (!post) return null;
  const otherPosts = posts?.nodes || [];

  const dateValue = post.date || new Date().toISOString();
  const formattedDate = new Date(dateValue).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article className={styles.page}>
      <BackgroundSlideshow posts={otherPosts} currentPostId={post.databaseId} />

      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.blueprintOverlay} />
        <div className={styles.gradientOverlay} />

        {post.featuredImage?.node?.sourceUrl && (
          <div className={styles.heroImage}>
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title || ""}
              fill
              priority
              quality={100}
            />
          </div>
        )}

        <div className={styles.heroContent}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.metaLabel}
          >
            Digital / Architecture / Archive
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.title}
          >
            {post.title || ""}
            <span>entry.0{post.databaseId || "0"}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={styles.metaBar}
          >
            <div className={styles.metaItem}>
              <span className={styles.itemLabel}>ID_NODE</span>
              <span className={styles.itemValue}>0x{(post.databaseId || 0).toString(16)}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.itemLabel}>DATE_PUB</span>
              <span className={styles.itemValue}>{formattedDate}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.itemLabel}>AUTH_CORE</span>
              <span className={styles.itemValue}>Juan Miguel</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={styles.contentWrapper}
      >
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
      </motion.div>

      {/* RELATED POSTS SLIDER */}
      <RelatedPostsSlider posts={otherPosts} currentPostId={post.databaseId} />

      {/* 3. FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerText}>
          Pachadev Terminal // End of Entry
        </div>
      </footer>
    </article>
  );
}
