import { useState } from "react";
import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { setToLocalStorage } from "../utilities";

const CardDetail = () => {
  const blogDetailData = useLoaderData();
  // console.log(blogDetailData);
  const {
    title,
    comments_count,
    reading_time_minutes,
    public_reactions_count,
    published_at,
    
  } = blogDetailData;
  const { id } = useParams();
  console.log(id);
  const [tabIndex, setTabIndex] = useState(0);
  // console.log(tabIndex);
  const handleAddToBookmark = (blogDetailData) => {
    console.log(blogDetailData);
    setToLocalStorage( blogDetailData);
  };
  return (
    <>
      <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8  text-gray-500">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex items-center md:space-x-2">
              <p className="text-sm">
                {new Date(published_at).toLocaleDateString()}
              </p>
              <p className="text-sm">@{reading_time_minutes} min read</p>
              <p className="text-sm">@{comments_count} comments</p>
              <p className="text-sm">@{public_reactions_count} views</p>
            </div>
          </div>
        </article>
        {/* ====tab==== */}
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden justify-start flex-nowrap text-gray-400">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center px-5 py-3 space-x-2 border-gray-400 text-gray-400 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Content</span>
          </Link>
          <Link
            to="author"
            onClick={() => setTabIndex(1)}
            className={`flex items-center px-5 py-3 space-x-2 border-gray-400 text-gray-400 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Author</span>
          </Link>
          <div
            onClick={() => handleAddToBookmark(blogDetailData)}
            className="text-blue-500 p-3 ml-6 bg-gray-300 rounded-full"
          >
            <MdBookmarkAdd size={30}></MdBookmarkAdd>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default CardDetail;
