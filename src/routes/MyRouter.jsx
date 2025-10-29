import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";
import Homepage from "../pages/Homepage";
import Blogspage from "../pages/Blogspage";
import Bookmarkspage from "../pages/Bookmarkspage";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout></MyLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/blogspage",
        element: <Blogspage></Blogspage>,
      },
      {
        path: "/bookmarkspage",
        element: <Bookmarkspage></Bookmarkspage>,
      },
    ],
  },
]);

export default myRouter;
