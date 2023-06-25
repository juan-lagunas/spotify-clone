import Image from "next/image"
import CardButton from "./CardButton"

const Card = () => {
  return (
    <div
      className="
          relative
          w-[168px]
          h-[220px]
          md:w-[190px]
          md:h-[280px]
          md:bg-[#181818]
          rounded-md
          p-2
          md:p-4
          cursor-pointer
          hover:bg-[#282828]
          transition
          group
        "
    >
      <div className="h-[152px] md:h-[160px] relative mx-auto mb-1 md:mb-4">
        <Image
          fill
          src="/images/piano.jpg"
          alt="image"
          className="rounded shadow-[0_8px_24px_rgba(0,0,0,.5)]"
        />
        <CardButton />
      </div>

      <div className="md:hidden">
        <div className="font-bold">Lord Huron</div>
        <div className="text-sm truncate text-[#a7a7a7]">
          Lorem ipsum dolor sit amet,
        </div>
      </div>

      <div className="max-md:hidden">
        <div className="font-bold text-md pb-1">Card title</div>
        <div className="mt-1 line-clamp-2 text-sm text-[#a7a7a7]">
          Lorem ipsum dolor sit amet, consect adipisc elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  )
}

export default Card
