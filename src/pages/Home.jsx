import BlogCard from "../components/BlogCard";

function Home({ blogs, likeBlog, deleteBlog, viewBlog }) {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          likeBlog={likeBlog}
          deleteBlog={deleteBlog}
          viewBlog={viewBlog}
        />
      ))}
    </div>
  );
}

export default Home;
