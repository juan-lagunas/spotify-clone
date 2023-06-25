"use client"

import PlayArrowIcon from "@mui/icons-material/PlayArrow"

const Button = () => {
  return (
    <div
      className="
        absolute
        right-2
        bottom-2
        text-black
        shadow-[0_8px_8px_rgba(0,0,0,.3)]
        opacity-0
        translate-y-3
        group-hover:translate-y-0
        group-hover:opacity-100
        transition
        ease-in-out
        duration-300
      "
    >
      <button
        className="
          h-12
          w-12
          flex
          items-center 
          justify-center
          bg-[#1ed760]
          rounded-full
          hover:scale-105
          hover:bg-[#1fdf64]
          transition
        "
      >
        <PlayArrowIcon sx={{ fontSize: 30 }} />
      </button>
    </div>
  )
}

export default Button
