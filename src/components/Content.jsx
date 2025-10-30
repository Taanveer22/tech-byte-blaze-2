import { useLoaderData } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blogDetailData = useLoaderData();
  // console.log(blogDetailData);
  const { cover_image, title, tags, body_html, url } = blogDetailData;
  return (
    <>
      <div className="w-full mx-auto group text-gray-400">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44"
          src={cover_image || placeholderImage}
        />
        <div className="flex flex-wrap py-6 gap-2">
          {tags.map((tag, index) => (
            <a
              key={index}
              className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
            >
              #{tag}
            </a>
          ))}
        </div>
        <a
          href={url}
          target={"_blank"}
          className="text-2xl font-semibold underline"
        >
          {title}
        </a>
        <div className="w-full overflow-x-hidden">
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </>
  );
};

export default Content;
