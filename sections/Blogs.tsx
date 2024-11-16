import BackgroundGradient from "@/components/BackgroundGradient";
import BlogCard from "@/components/BlogCard";
import { getAllBlogs } from "@/lib/blogUtils"; 

export function Blogs() {
  const blogData = getAllBlogs();

  return (
    <section id="blogs">
      <div className="relative max-w-7xl mx-auto m-10 px-6 md:px-12 xl:px-6">
        <BackgroundGradient color1="#ff80b5" color2="#9089fc" position="bottom left" id={3} />
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-300 md:text-5xl">Latest Blogs</h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-300 p-2">
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia
            aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog, index) => {
            const imageSrc = blog.metadata.image 
              ? `/assets/${blog.metadata.image.replace(/^\/+/, '')}` 
              : '/assets/blogImg.png';

            return (
              <BlogCard
                key={index}
                imageSrc={imageSrc} 
                title={blog.metadata.title} 
                description={blog.metadata.description}
                date={blog.metadata.date} 
                excerpt={blog.metadata.excerpt} 
                slug={blog.slug} 
                link={`/blogs/${blog.slug}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
