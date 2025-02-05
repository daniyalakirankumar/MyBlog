import React from 'react';

const CreateBlogForm = ({ newTitle, setNewTitle, newContent, setNewContent, newImageUrl, setNewImageUrl, createBlog }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h3 className="text-xl font-semibold">Create New Blog</h3>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Content"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <button
            onClick={createBlog}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full hover:bg-blue-600"
          >
            Create Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogForm;
