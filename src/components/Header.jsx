import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { AuthContext } from "../provider/AuthProvider";



function Header() {
  const { user, signOutUser  } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser ()
        .then(res => console.log(res))
        .catch(err => console.error(err));
};
  console.log(user)
  return (
    <div className="bg-base-100  dark:bg-gray-900 text-black dark:text-white fixed z-50 w-full">
      <div className="navbar  md:px-8 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white dark:bg-gray-900 text-black dark:text-white  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all-visas">All Visas</Link>
              </li>
              <li>
                <Link to="/add-visa">Add Visa</Link>
              </li>
              <li>
                <Link to={`/my-visas/${user?.email}`}>My Added Visas</Link>
              </li>
              <li>
                <Link to="/my-applications">My Applications</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className=" font-bold text-sm md:text-xl">
     
          Visa <span className="text-red-400 "> Navigator</span>  
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-visas">All Visas</Link>
            </li>
            <li>
              <Link to="/add-visa">Add Visa</Link>
            </li>
            <li>
            <Link to={`/my-visas/${user?.email}`}>My Added Visas</Link>
            </li>
            <li>
              <Link to="/my-applications">My  Applications</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
      {
                    user ? (
                        <button
                            className='bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-200'
                            onClick={handleSignOut}
                            aria-label="Sign Out"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <Link to={'/register'}>
                            <button
                                className='bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition duration-200'
                                aria-label="Login"
                            >
                                Login
                            </button>
                        </Link>
                    )
                }
          <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full overflow-hidden border-2 border-gray-300">
                            <Link to={'/profile'}>
                                <img
                                    alt="User  Avatar"
                                    src={ user?.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKOdmJz8Z2pDtYgFgR2u9spABvNNPKYYtGw&s'} // Provide a default image path
                                />
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
