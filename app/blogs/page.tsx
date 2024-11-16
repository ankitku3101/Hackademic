import { getAllBlogs } from "@/lib/blogUtils";
import Link from "next/link";

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <section className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Blogs</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="p-6 rounded-xl border bg-clip-padding backdrop-filter backdrop-blur-lg text-center shadow-md"
          >
            <h2 className="text-xl font-semibold">{blog.metadata.title}</h2>
            <p className="text-gray-50">{blog.metadata.date}</p>
            <p className="mt-4">{blog.metadata.excerpt}</p>
            <Link href={`/blogs/${blog.slug}`}>
              <a className="text-blue-500 mt-4 block">Read More</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
