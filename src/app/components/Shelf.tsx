import Link from "next/link"

import Card from "./Card"

const Shelf = () => {
  return (
    <div className="max-md:mt-4 md:h-[350px] max-w-[1955px] mb-4">
      <div className="px-4 md:px-6 flex items-center justify-between mb-3 md:mb-4">
        <a
          href=""
          className="text-xl md:text-2xl font-bold capitalize md:hover:underline transition"
        >
          Your top mixes
        </a>
        <Link
          href="/"
          className="text-sm font-bold opacity-60 hover:opacity-100 md:hover:underline transition"
        >
          Show all
        </Link>
      </div>
      <div className="px-2 md:px-6 grid grid-flow-col auto-cols-min md:gap-6 overflow-x-scroll">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Shelf
