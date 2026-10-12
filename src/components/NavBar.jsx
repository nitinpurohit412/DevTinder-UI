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
<div className="navbar sticky top-0 z-50 border-b border-neutral-800 bg-black px-4 text-white shadow-lg sm:px-6">
  <div className="flex-1">
    <Link
      to="/"
      className="btn btn-ghost gap-2 text-xl font-bold tracking-tight text-white hover:bg-neutral-900"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/10 text-lg font-bold text-green-400">
        D
      </span>
      <span>
        Dev<span className="text-green-400">Tinder</span>
      </span>
    </Link>
  </div>

  {user && (
    <div className="flex items-center gap-2 sm:gap-4">
      <div className="form-control mt-2 text-sm font-medium text-neutral-300 sm:text-base">
        Welcome, <span className="inline text-green-400">{user.firstName}</span>
      </div>

      <div className="dropdown dropdown-end mx-2 sm:mx-3">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar ring-2 ring-neutral-800 transition hover:ring-green-500"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={user.photoUrl}
            />
          </div>
        </div>

        <ul
          tabIndex={-1}
          className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-xl border border-neutral-800 bg-neutral-950 p-2 text-neutral-200 shadow-2xl"
        >
          <li>
            <Link
              to="/profile"
              className="justify-between rounded-lg py-3 hover:bg-neutral-900 hover:text-green-400"
            >
              Profile
            </Link>
          </li>

          <li>
            <Link
              to="/connections"
              className="rounded-lg py-3 hover:bg-neutral-900 hover:text-green-400"
            >
              Connections
            </Link>
          </li>

          <li>
            <Link
              to="/requests"
              className="rounded-lg py-3 hover:bg-neutral-900 hover:text-green-400"
            >
              Requests
            </Link>
          </li>

          <li>
            <a
              onClick={handleLogout}
              className="rounded-lg py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  )}
</div>

  )
}

export default NavBar
