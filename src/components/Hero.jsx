import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="hero bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex gap-5 items-center justify-center">
              <Link to="/blogspage" className="btn btn-primary">
                Read Blogs
              </Link>
              <Link to="/bookmarkspage" className="btn btn-primary">
                See Bookmarks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
