import { Link } from "react-router-dom";

const EmptyState = ({ message }) => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-116px)] justify-center items-center space-y-5">
      <h1 className="text-3xl font-bold text-red-500">{message}</h1>
      <Link to="/blogspage" className="btn btn-primary">
        Browse Blogs
      </Link>
    </div>
  );
};

export default EmptyState;
