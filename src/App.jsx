import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import Navbar from "./components/Navbar";
import CreateBlog from "./pages/CreateBlog";
import { useState, useEffect } from "react";

function App() {
  const [blogs, setBlogs] = useState(() => {
    // Load blogs from localStorage if available, else use default blogs
    const savedBlogs = localStorage.getItem("blogs");
    return savedBlogs ? JSON.parse(savedBlogs) : [
      {
        id: 1,
        title: "First Blog",
        body: "This is the first blog post. It contains some interesting content.",
        blogImage: "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg",
        likes: 0,
        views: 0,
        comments: [],
      },
      {
        id: 2,
        title: "Second Blog",
        body: "This is the second blog post. It contains some more interesting content.",
        blogImage: "https://www.businesswest.co.uk/sites/default/files/styles/event_image/public/blog/featured/blog_images.jpg?itok=uv1yW4hI",
        likes: 0,
        views: 0,
        comments: [],
      },
    ];
  });

  useEffect(() => {
    // Save blogs to localStorage whenever blogs state changes
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
  };

  const updateBlog = (id, updatedTitle, updatedBody, updatedImage) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id
          ? { ...blog, title: updatedTitle, body: updatedBody, blogImage: updatedImage }
          : blog
      )
    );
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const likeBlog = (id) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
      )
    );
  };

  const viewBlog = (id) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id ? { ...blog, views: blog.views + 1 } : blog
      )
    );
  };

  const addComment = (id, comment) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id
          ? { ...blog, comments: [...blog.comments, comment] }
          : blog
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              blogs={blogs}
              likeBlog={likeBlog}
              deleteBlog={deleteBlog}
              viewBlog={viewBlog}
            />
          }
        />
        <Route
          path="/blog/:id"
          element={
            <BlogDetail
              blogs={blogs}
              addComment={addComment}
              viewBlog={viewBlog}
              updateBlog={updateBlog}
              likeBlog={likeBlog}
            />
          }
        />
        <Route path="/create" element={<CreateBlog addBlog={addBlog} />} />
      </Routes>
    </Router>
  );
}

export default App;
