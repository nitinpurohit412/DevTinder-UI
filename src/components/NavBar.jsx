import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import {BASE_URL} from "../utils/constant";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {

  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async() =>{
    try {
      await axios.post(BASE_URL + "/logout", {}, {withCredentials : true})
      dispatch(removeUser())
      return navigate("/login")
    } catch (err) {
      // Error logic maybe redirect  to error page
    }
  }

  return (
<div className="sticky top-0 z-50 border-b border-neutral-800/80 bg-black/90 text-white shadow-lg shadow-black/20 backdrop-blur-xl">
  <div className="navbar mx-auto min-h-20 max-w-7xl px-4 sm:px-8">
    {/* Logo */}
    <div className="flex-1">
      <Link to="/" className="group flex items-center gap-3 no-underline">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 text-xl font-bold text-white shadow-inner transition duration-300 group-hover:border-neutral-500 group-hover:bg-neutral-800">
          D
        </div>

        <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          Dev<span className="text-green-400">Tinder</span>
        </span>
      </Link>
    </div>

    {/* User Menu */}
    {user && (
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="hidden text-right sm:block">
          <p className="text-xs tracking-wide text-neutral-500">
            Welcome back,
          </p>
          <p className="mt-0.5 text-sm font-semibold text-neutral-100">
            {user.firstName}
          </p>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 p-1.5 pr-3 transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-900"
          >
            <div className="avatar">
              <div className="h-9 w-9 rounded-full ring-2 ring-neutral-800 transition group-hover:ring-neutral-600">
                <img
                  alt="Profile"
                  src={
                    user.photoUrl ||
                    "https://placehold.co/100x100/262626/FFFFFF?text=U"
                  }
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/100x100/262626/FFFFFF?text=U";
                  }}
                />
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-neutral-500 transition-colors hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-60 rounded-2xl border border-neutral-800 bg-neutral-950 p-2 text-neutral-300 shadow-2xl shadow-black/40"
          >
            <li className="menu-title px-3 py-2 text-xs uppercase tracking-[0.15em] text-neutral-500">
              Your Account
            </li>

            <li>
              <Link
                to="/profile"
                className="rounded-xl py-3 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                <span>My Profile</span>
              </Link>
            </li>

            <li>
              <Link
                to="/connections"
                className="rounded-xl py-3 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                <span>Connections</span>
              </Link>
            </li>

            <li>
              <Link
                to="/requests"
                className="rounded-xl py-3 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                <span>Connection Requests</span>
              </Link>
            </li>

            <div className="my-2 border-t border-neutral-800" />

            <li>
              <a
                onClick={handleLogout}
                className="rounded-xl py-3 text-red-400 transition-colors hover:bg-red-950/40 hover:text-red-300"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    )}
  </div>
</div>


  )
}

export default NavBar
