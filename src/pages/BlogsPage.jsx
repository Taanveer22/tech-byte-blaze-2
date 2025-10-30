import { useLoaderData, useNavigation } from "react-router-dom";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const BlogsPage = () => {
  const blogsData = useLoaderData();
  // console.log(blogsData);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <section className="text-gray-400">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
            <img
              src={blogsData[0].cover_image}
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blogsData[0].title}
              </h3>
              <span className="text-xs text-gray-400">
                {new Date(blogsData[0].published_at).toLocaleDateString()}
              </span>
              <p>{blogsData[0].description}</p>
            </div>
          </div>
          {/* ============ blogs card map ========== */}
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogsData.slice(1, 19).map((blogItem) => (
              <Card key={blogItem.id} blogItem={blogItem}></Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
