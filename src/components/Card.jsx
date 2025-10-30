import { Link } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";
const Card = ({ blogItem }) => {
  // console.log(blogItem);
  const { cover_image, title, description, published_at, id } = blogItem;
  return (
    <>
      <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline text-gray-400 border-2 border-primary hover:scale-105 hover:border-secondary">
        <Link to={`/cardDetail/${id}`}>
          <img
            role="presentation"
            className="object-cover w-full rounded h-44"
            src={cover_image || placeholderImage}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs ">
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
