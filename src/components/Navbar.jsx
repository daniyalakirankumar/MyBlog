import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4" style={{ background: 'linear-gradient(to right, #6a11cb, #2575fc)' }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">My Blog</Link>
        <div>
          <Link to="/" className="text-white px-4 py-2 hover:text-gray-300">Home</Link>
          <Link
            to="/create"
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
