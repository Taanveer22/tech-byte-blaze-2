import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utilities";
import Card from "../components/Card";

const Bookmarkspage = () => {
  const [blogs, setBlogs] = useState([]);
  // console.log(blogs);
  useEffect(() => {
    const lsBlogs = getFromLocalStorage();
    setBlogs(lsBlogs);
  }, []);
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-12">
      {blogs.map((blogItem) => (
        <Card key={blogItem.id} blogItem={blogItem}></Card>
      ))}
    </div>
  );
};

export default Bookmarkspage;
