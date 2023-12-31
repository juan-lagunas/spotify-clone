"use client"

import Link from "next/link"
import LibraryItem from "./LibraryItem"

import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { Settings, NavigateBefore, NavigateNext } from "@mui/icons-material"

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const router = useRouter()

  const handleLogout = () => {
    // Handle logout later
  }

  return (
    <div
      className={twMerge(`h-fit bg-[#121212] p-4 md:py-4 md:px-6`, className)}
    >
      {/* Nav */}
      <div className="w-full flex items-center justify-between">
        {/* Desktop nav */}
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              opacity-50
              hover:opacity-100
              transition
              h-8
              aspect-square
            "
          >
            <NavigateBefore sx={{ fontSize: 24 }} />
          </button>

          <button
            onClick={() => router.forward()}
            className="
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              opacity-50
              hover:opacity-100
              transition
              h-8
              aspect-square
            "
          >
            <NavigateNext sx={{ fontSize: 24 }} />
          </button>
        </div>

        {/* Not logged in buttons */}
        <Link
          href="/login"
          className="max-md:hidden bg-white py-2 px-4 rounded-full text-black font-bold hover:opacity-80 transition"
        >
          Log in
        </Link>

        {/* Mobile header */}
        <div className="md:hidden w-full flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold md:hidden">Welcome</div>
            <button>
              <Settings sx={{ fontSize: 24 }} />
            </button>
          </div>
          <div className="flex gap-2 font-semibold text-sm">
            <LibraryItem
              href="/"
              src="/images/moody.jpg"
              playlist="Moody Mix"
              className="bg-[#242424]"
            />
            <LibraryItem
              href="/"
              src="/images/lord.jpg"
              artist="Lord Huron"
              className="bg-[#242424]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
