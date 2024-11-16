import BackgroundGradient from "@/components/BackgroundGradient";
import BlogCard from "@/components/BlogCard";
import { getAllBlogs } from "@/lib/blogUtils"; // Import the utility function to fetch blog data
import defaultBlogImage from "@/assets/blogImg.png"; // Import the default image

export function Blogs() {
  // Fetch the blog data using the getAllBlogs utility function
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
          {/* Render BlogCard for each blog in the fetched data */}
          {blogData.map((blog, index) => (
            <BlogCard
                key={index}
                imageSrc={blog.metadata.image || defaultBlogImage} // Use blog image or default if not present
                title={blog.metadata.title} // Correctly passing title field from metadata
                description={blog.metadata.description} // Correctly passing description field from metadata
                date={blog.metadata.date} // Passing date field to BlogCard
                excerpt={blog.metadata.excerpt} // Passing excerpt field to BlogCard
                slug={blog.slug} // Ensure the 'slug' is correctly passed to BlogCard
                link={`/blogs/${blog.slug}`} // Pass the correct link to the BlogCard
            />
            ))}
        </div>
      </div>
    </section>
  );
}
