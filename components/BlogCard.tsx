import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  excerpt: string;
  link: string; 
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, title, description, slug, date, excerpt, link }) => {
  const truncatedExcerpt = excerpt ? `${excerpt}...` : "";

  return (
    <div className="bg-transparent p-6 rounded-xl border border-black/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 text-center shadow-black shadow-xl">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={title}
          loading="lazy"
          width={1000}
          height={667}
          className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-6 relative">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{date}</p> 
        <p className="mt-6 mb-8 text-gray-300">{truncatedExcerpt}</p> 
        <Link href={link}>
          <span className="inline-block text-blue-300">Read more</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
