import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Yoga & Wellness Blog | Neon Fox — College Station, TX",
  description:
    "Local yoga guides, mobility tips, and high-performance recovery resources for College Station, Bryan, and Brazos Valley residents. Written by Neon Fox's certified coaches.",
  openGraph: {
    title: "Yoga & Recovery Blog | Neon Fox — College Station, TX",
    description:
      "Practical yoga, Pilates, and high-performance recovery content for Brazos Valley residents — outdoor guides, desk health tips, and community resources.",
  },
};

const categoryColors: Record<string, string> = {
  "Local Guide": "bg-[#800000]/10 text-[#6b0000]",
  "Wellness Tips": "bg-slate-100 text-slate-700",
  Community: "bg-amber-50 text-amber-700",
  "Game Day": "bg-rose-50 text-rose-700",
  "Athletic Performance": "bg-red-950 text-red-100",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="bg-slate-50 border-b border-slate-100 py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
            Resources
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Yoga &amp; Mobility in the Brazos Valley
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Practical guides, local tips, and high-performance recovery resources from Neon Fox's
            coaches — written for College Station and Bryan residents.
          </p>
        </div>
      </div>

      {/* Post list */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-8">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className={`group ${i < posts.length - 1 ? "pb-8 border-b border-slate-100" : ""}`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
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
                <time
                  dateTime={post.publishedAt}
                  className="text-xs text-slate-400"
                >
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#800000] transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#800000] hover:text-[#6b0000] transition-colors"
              >
                Read article
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 p-8 bg-slate-900 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Ready to experience it in person?
          </h3>
          <p className="text-slate-400 text-sm mb-5">
            Private in-home sessions and community pop-ups across College Station and Bryan.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#800000] hover:bg-[#6b0000] px-6 py-3 text-sm font-bold text-white transition-colors"
          >
            Book a Session
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
