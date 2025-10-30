import { useEffect, useState } from "react";
import { deleteFromLocalStorage, getFromLocalStorage } from "../utilities";
import Card from "../components/Card";
import EmptyState from "../components/EmptyState";

const Bookmarkspage = () => {
  const [blogs, setBlogs] = useState([]);
  // console.log(blogs);
  useEffect(() => {
    const lsBlogs = getFromLocalStorage();
    setBlogs(lsBlogs);
  }, []);
  const handleDeleteBookmark = (id) => {
    // console.log(id);
    deleteFromLocalStorage(id);
    const lsBlogs = getFromLocalStorage();
    setBlogs(lsBlogs);
  };
  if (blogs.length < 1) {
    return <EmptyState message={"No bookmarks found"}></EmptyState>;
  }
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-12">
      {blogs.map((blogItem) => (
        <Card
          deletable={true}
          key={blogItem.id}
          blogItem={blogItem}
          handleDeleteBookmark={handleDeleteBookmark}
        ></Card>
      ))}
    </div>
  );
};

export default Bookmarkspage;
