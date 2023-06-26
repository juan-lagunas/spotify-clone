"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"

import SidebarItem from './SidebarItem'
import Library from "./Library"
import MobileNav from "./MobileNav"
import Playing from "./Playing"

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname()
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  )
  return (
    <div className="flex flex-col h-full gap-2 md:p-2">
      <div className="flex overflow-auto h-full">
        <div className="hidden md:flex flex-col gap-y-2 w-[30%] max-w-[370px] pr-2">
          <div className="bg-[#121212] rounded-lg h-fit w-full flex flex-col gap-y-4 px-6 py-3">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
          <div className="h-full w-full bg-[#121212] rounded-lg overflow-y-auto ">
            <Library />
          </div>
        </div>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>

      <div className="w-full flex flex-col max-md:fixed bottom-0 bg-gradient-to-b from-transparent to-black to-[58%]">
        <Playing />
        <MobileNav />
      </div>
    </div>
  )
}

export default Sidebar
