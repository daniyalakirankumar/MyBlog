import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BlogDetail({ blogs, addComment, updateBlog, likeBlog, viewBlog }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogs.find((blog) => blog.id.toString() === id);

    if (!blog) return <div className="text-center">Blog not found</div>;

    const [newComment, setNewComment] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(blog.title);
    const [updatedBody, setUpdatedBody] = useState(blog.body);
    const [updatedImage, setUpdatedImage] = useState(blog.blogImage);
    const [likes, setLikes] = useState(blog.likes);

    // Handle new comment submission
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            addComment(blog.id, newComment);
            setNewComment("");
        }
    };

    // Handle blog update
    const handleUpdate = (e) => {
        e.preventDefault();
        updateBlog(blog.id, updatedTitle, updatedBody, updatedImage);
        setIsEditing(false); // Close the edit form
    };

    // Function to handle like click
    const handleLikeClick = () => {
        likeBlog(blog.id); // Call the likeBlog function passed as prop
        setLikes(likes + 1); // Update likes count locally
    };

    // Fetch likes from localStorage when the component mounts
    useEffect(() => {
        const storedLikes = localStorage.getItem(`blog-${blog.id}-likes`);
        if (storedLikes !== null) {
            setLikes(parseInt(storedLikes, 10));
        }
    }, [blog.id]);

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg p-8">
                {isEditing ? (
                    <>
                        <h2 className="text-2xl font-semibold">Update Blog</h2>
                        <form onSubmit={handleUpdate} className="mt-4">
                            <div className="mb-4">
                                <label className="block mb-2">Title</label>
                                <input
                                    type="text"
                                    value={updatedTitle}
                                    onChange={(e) => setUpdatedTitle(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Body</label>
                                <textarea
                                    value={updatedBody}
                                    onChange={(e) => setUpdatedBody(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    rows="5"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Image URL</label>
                                <input
                                    type="text"
                                    value={updatedImage}
                                    onChange={(e) => setUpdatedImage(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Update Blog
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold">{blog.title}</h1>
                        <img
                            src={blog.blogImage}
                            alt={blog.title}
                            className="w-full h-64 object-cover mt-4 rounded-lg"
                        />
                        <p className="text-gray-600 mt-6">{blog.body}</p>
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold">Details</h3>
                            <div className="mt-4 flex items-center text-gray-600">
                                <i
                                    className="fas fa-thumbs-up mr-2 cursor-pointer"
                                    onClick={handleLikeClick}
                                ></i>
                                <span>{likes}</span>
                            </div>
                            <div className="mt-4 flex items-center text-gray-600">
                                <i className="fas fa-eye mr-2"></i>
                                <span>{blog.views}</span>
                            </div>
                            <div className="mt-4 flex items-center text-gray-600">
                                <i className="fas fa-comment mr-2"></i>
                                <span>{blog.comments.length}</span>
                            </div>
                            <form
                                className="mt-4"
                                onSubmit={handleCommentSubmit}
                            >
                                <textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Add a comment"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    rows="4"
                                />
                                <button
                                    type="submit"
                                    className="mt-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                >
                                    Add Comment
                                </button>
                            </form>
                        </div>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="mt-3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                        >
                            Edit Blog
                        </button>
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold">Comments:</h3>
                            <ul className="mt-2">
                                {blog.comments.length > 0 ? (
                                    blog.comments.map((comment, index) => (
                                        <li key={index} className="mt-2 p-2 border-b">
                                            <i className="fas fa-comment-alt mr-2"></i>
                                            {comment}
                                        </li>
                                    ))
                                ) : (
                                    <p>No comments yet</p>
                                )}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default BlogDetail;
