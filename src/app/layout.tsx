import { Figtree } from "next/font/google"
import { twMerge } from "tailwind-merge"

import "./globals.css"

const font = Figtree({ subsets: ["latin"] })

export const metadata = {
  title: "Juan's Spotify",
  description: "Spotify Clone For Learning",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={twMerge(`select-none box-border`, font.className)}>{children}</body>
    </html>
  )
}
