import Link from 'next/link'
import { useState } from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

const Header = () => {
  const [user, setUser] = useState(false)

  return (
    <header className="p-6 shadow-[0_0_5px_0_rgba(0,0,0,0.5)]">
      <div className="container mx-auto flex items-center justify-between font-semibold tracking-wide">
        <div className="head__logo | flex items-center gap-2">
          <img
            className="max-h-10"
            src="/logo/calendar.png"
            alt="Calendar Logo"
          />
          <h2 className="ml-2">Booking Calendar</h2>
        </div>
        <div className="flex items-center gap-2">
          {user ? (
            <div>
              <p>Welcome back, Leslie</p>
              {/* <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="h-10 w-10 flex-none rounded-full"
              /> */}
            </div>
          ) : (
            <ul className="flex items-center justify-between">
              <li>
                <Link
                  href="/"
                  className="m-1 flex items-center justify-between"
                >
                  <FaSignInAlt className="mr-1" /> Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="m-1 flex items-center justify-between"
                >
                  <FaUser className="mr-1" /> Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
