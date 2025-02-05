import { Link } from "react-router-dom";

function BlogCard({ blog, likeBlog, deleteBlog, viewBlog }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300 ease-in-out">
      <img
        src={blog.blogImage}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-2xl font-semibold text-black">
          {blog.title}
        </h3>

        <p className="text-gray-800 mt-2">
          {blog.body.slice(0, 100)}... 
          <Link 
            to={`/blog/${blog.id}`} 
            onClick={() => viewBlog(blog.id)}
            className="text-blue-500 hover:underline ml-1"
          >
            Read more
          </Link>
        </p>

        <button
          onClick={() => deleteBlog(blog.id)}
          className="text-red-500 hover:text-red-700 mt-4"
        >
          <i className="fas fa-trash-alt text-2xl"></i> 
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
