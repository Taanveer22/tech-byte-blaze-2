import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";
import Homepage from "../pages/Homepage";
import Bookmarkspage from "../pages/Bookmarkspage";
import Blogspage from "../pages/BlogsPage";
import CardDetail from "../components/CardDetail";
import Content from "../components/Content";
import Author from "../components/Author";

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
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "/cardDetail/:id",
        element: <CardDetail></CardDetail>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },
      {
        path: "/bookmarkspage",
        element: <Bookmarkspage></Bookmarkspage>,
      },
    ],
  },
]);

export default myRouter;
