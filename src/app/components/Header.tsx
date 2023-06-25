"use client"

import Link from "next/link"
import Image from "next/image"

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
        <div className="hidden md:flex justify-between itmes-center gap-x-4">
          <Link
            href="/login"
            className="bg-white py-2 px-4 rounded-full text-black font-bold hover:opacity-80 transition"
          >
            Log in
          </Link>
        </div>

        {/* mdall screen nav */}
        <div className="md:hidden w-full flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold md:hidden">Welcome</div>
            <button>
              <Settings sx={{ fontSize: 24 }} />
            </button>
          </div>
          <div className="flex gap-2 font-semibold text-sm">
            <div className="h-14 w-full bg-[#242424] rounded flex items-center gap-2 overflow-hidden shadow-lg">
              <div className="relative h-full aspect-square bg-black">
                <Image fill alt="artist" src="/images/lord.jpg" />
              </div>
              <div>Lord Huron</div>
            </div>
            <div className="h-14 w-full bg-[#242424] rounded flex items-center gap-2 overflow-hidden shadow-lg">
              <div className="relative h-full aspect-square bg-black">
                <Image fill alt="artist" src="/images/moody.jpg" />
              </div>
              <div>Moody Mix</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
