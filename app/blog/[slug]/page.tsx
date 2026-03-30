import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowRight, Clock, Tag, ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Neon Fox`,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

const categoryColors: Record<string, string> = {
  "Local Guide": "bg-[#800000]/10 text-[#6b0000]",
  "Wellness Tips": "bg-slate-100 text-slate-700",
  Community: "bg-amber-50 text-amber-700",
  "Game Day": "bg-rose-50 text-rose-700",
  "Athletic Performance": "bg-red-950 text-red-100",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts().filter((p) => p.slug !== slug).slice(0, 2);

  // Render body: split on ## headings and paragraphs
  const renderBody = (body: string) => {
    const lines = body.split("\n");
    const elements: React.ReactNode[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={key++}
            className="text-xl font-bold text-slate-900 mt-10 mb-3 scroll-mt-20"
          >
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={key++} className="font-semibold text-slate-800 mt-4 mb-1">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      } else if (line.startsWith("- ")) {
        const items: string[] = [];
        let j = i;
        while (j < lines.length && lines[j].trim().startsWith("- ")) {
          items.push(lines[j].trim().replace("- ", ""));
          j++;
        }
        elements.push(
          <ul key={key++} className="list-disc list-inside space-y-1 text-slate-600 text-sm my-3 ml-2">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
        i = j - 1;
      } else if (line.startsWith("---")) {
        elements.push(<hr key={key++} className="my-8 border-slate-100" />);
      } else {
        // Inline bold: replace **text** with <strong>
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        const rendered = parts.map((part, idx) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={idx} className="font-semibold text-slate-800">{part.replace(/\*\*/g, "")}</strong>;
          }
          return part;
        });
        elements.push(
          <p key={key++} className="text-slate-600 leading-relaxed text-base my-3">
            {rendered}
          </p>
        );
      }
    }
    return elements;
  };

  return (
    <div className="bg-white">
      {/* Article header */}
      <div className="bg-slate-50 border-b border-slate-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <div className="flex flex-wrap items-center gap-2 mt-5 mb-4">
            <span
              className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                categoryColors[post.category] ?? "bg-slate-100 text-slate-600"
              }`}
            >
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <Clock className="h-3 w-3" />
              {post.readingTime}
            </span>
            <time dateTime={post.publishedAt} className="text-xs text-slate-400">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {post.title}
          </h1>
          <p className="mt-3 text-slate-500 text-lg leading-relaxed">{post.description}</p>
        </div>
      </div>

      {/* Article body */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose-custom">{renderBody(post.body)}</article>

        {/* CTA block */}
        <div className="mt-14 p-8 bg-slate-900 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-2">
            Want personalized coaching in College Station?
          </h3>
          <p className="text-slate-400 text-sm mb-5 leading-relaxed">
            Private in-home sessions and community pop-ups across the Brazos Valley.
            We come to you — no studio required.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#800000] hover:bg-[#6b0000] px-5 py-2.5 text-sm font-bold text-white transition-colors"
            >
              Book a Session
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 hover:border-slate-400 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Related posts */}
        {allPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-bold text-slate-900 mb-5">More from the Blog</h3>
            <div className="space-y-5">
              {allPosts.map((related) => (
                <div
                  key={related.slug}
                  className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 group hover:border-slate-200 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-400 mb-1">{related.category}</p>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-[#800000] transition-colors">
                      <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">{related.excerpt}</p>
                  </div>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="shrink-0 self-center text-slate-300 group-hover:text-[#800000] transition-colors"
                    aria-label={`Read ${related.title}`}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
