import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "data/blogs");

export function getAllBlogs() {
  const files = fs.readdirSync(blogsDirectory);

  return files.map((fileName) => {
    const filePath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    const defaultImage = "//blogImg.png"; 
    const defaultTitle = "Untitled Blog Post";
    const defaultDescription = "No description available for this blog post.";
    const defaultDate = new Date().toISOString(); 
    const defaultExcerpt = content.slice(0, 150); 

    return {
      slug: fileName.replace(".md", ""),
      metadata: {
        title: data.title || defaultTitle,              
        description: data.description || defaultDescription, 
        image: data.image || defaultImage,               
        date: data.date || defaultDate,                  
        excerpt: data.excerpt || defaultExcerpt,         
      },
      content,
    };
  });
}
