import toast from "react-hot-toast";

// get from local storage function
const getFromLocalStorage = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

// set to local storage function
const setToLocalStorage = (blogDetailData) => {
  let blogs = getFromLocalStorage();
  console.log(blogs);
  const isExist = blogs.find(
    (blogElement) => blogElement.id === blogDetailData.id
  );
  if (isExist) {
    return toast.error("already bookmarked");
  } else {
    blogs.push(blogDetailData);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    return toast.success("successfully added to bookmarked");
  }
};

// delete from local storage
const deleteFromLocalStorage = (id) => {
  const blogs = getFromLocalStorage();
  const reaminingBlogs = blogs.filter((blogElement) => blogElement.id !== id);
  localStorage.setItem("blogs", JSON.stringify(reaminingBlogs));
  toast.success("finally deleted from bookmarked");
};

// export all functions
export { getFromLocalStorage, setToLocalStorage, deleteFromLocalStorage };
