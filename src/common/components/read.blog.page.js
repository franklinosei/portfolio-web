import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { categories } from "../../utilities/config";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setFilteredBlogs } from "../../features/blogs.slice";
import { getBlogById } from "../../utilities/handlers/blogs.handler";
import { tuple } from "yup";

function ReadBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { allCategories } = useSelector((state) => state.blogsData);

  const [blog, setBlog] = useState(location.state?.blog ?? undefined);
  const [isLoading, setIsLoading] = useState(true);

  // const { blog } = location.state ?? {};

  async function getBlogData(id) {
    setIsLoading(true);

    if (blog === undefined) {
      let blogData = await getBlogById({ id: id });
      setBlog(blogData);
    }

    setIsLoading(false);
  }

  const { id } = useParams();

  useEffect(() => {
    getBlogData(id);
  }, []);

  return (
    <div className="mt-16 md:mt-4 p-4 ">
      <div>
        <button
          onClick={() => navigate(-1)}
          className="flex m-4 text-amber-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FFC107"
            className="w-5 h-5 self-center mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>

          <span>Back to blogs</span>
        </button>
      </div>
      {
      
      isLoading ? (
        <div>
          <h3 className="text-lg">Loading</h3>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <section className="min-h-screen w-full md:w-3/4 p-6 border-l-[1px] border-t-[2px] border-r-[1px] border-l-gray-600 border-r-gray-600 border-t-amber-400">
            <MDEditor.Markdown
              source={blog.blogContent}
              style={{ whiteSpace: "pre-wrap", backgroundColor: "transparent" }}
            />
          </section>

          <aside className="md:min-h-screen w-1/4 content-start px-4 collapse md:visible">
            <div className="sticky top-0">
              <h3 className="text-white font-semibold text-xl mb-12">
                Categories
              </h3>

              <div className="flex flex-col">
                {Object.keys(allCategories)
                  .sort()
                  .map((cat) => {
                    return (
                      <button
                        onClick={() => {
                          dispatch(setCategory(cat));
                          dispatch(setFilteredBlogs(cat));

                          navigate(-1);
                        }}
                        className="text-amber-400 text-lg flex truncate"
                      >
                        <span className="hover:opacity-70">{cat}</span>
                        <span className="text-white ml-1">
                          ({allCategories[cat]})
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

export default ReadBlog;
