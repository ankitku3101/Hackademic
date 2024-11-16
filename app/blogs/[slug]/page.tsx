import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPost from "@/components/BlogPost";

export async function generateStaticParams() {
  const blogsDirectory = path.join(process.cwd(), "data/blogs");
  const filenames = fs.readdirSync(blogsDirectory);
  const slugs = filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));

  return slugs.map((slug) => ({ slug: slug.slug }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {

  const blogsDirectory = path.join(process.cwd(), "data/blogs");
  const filePath = path.join(blogsDirectory, `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  
  const { data, content } = matter(fileContent);

  return (
    <BlogPost metadata={data} content={content} />
  );
}
