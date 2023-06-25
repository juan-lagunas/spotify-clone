"use client"

import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion"
import AddIcon from "@mui/icons-material/Add"
import Button from "./Button"
import LibraryItem from "./LibraryItem"

const Library = () => {
  const onClick = () => {
    // Handle upload later
  }
  return (
    <a href="" className="flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 text-zinc-400">
        <div className="inline-flex items-center gap-x-2 cursor-pointer hover:text-white transition">
          <AutoAwesomeMotionIcon sx={{ fontSize: 28 }} />
          <p className="font-bold">Your library</p>
        </div>
        <Button className="hover:text-white hover:bg-[#1a1a1a]">
          <AddIcon sx={{ fontSize: 20 }} />
        </Button>
      </div>
      <div className="space-y-2 px-3">
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
        <LibraryItem
          src="/images/strange.jpg"
          album="Strange Trails"
          user="Lord Huron"
        />
      </div>
    </a>
  )
}

export default Library
