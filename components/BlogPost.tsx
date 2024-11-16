import Markdown from "markdown-to-jsx";

export default function BlogPost({ metadata, content }: any) {
  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{metadata.title}</h1>
      
      <p className="text-gray-500 mb-6">{metadata.date}</p>

      <div className="mt-8 prose lg:prose-xl">
        <Markdown
          options={{
            overrides: {
              p: {
                component: (props: any) => (
                  <p {...props} className="mb-6 leading-relaxed" /> 
                ),
              },
              h1: {
                component: (props: any) => (
                  <h1 {...props} className="text-4xl font-bold mb-6" /> 
                ),
              },
              h2: {
                component: (props: any) => (
                  <h2 {...props} className="text-3xl font-semibold mt-6 mb-4" /> 
                ),
              },
              h3: {
                component: (props: any) => (
                  <h3 {...props} className="text-2xl font-semibold mt-5 mb-3" /> 
                ),
              },
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </article>
  );
}
