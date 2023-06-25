import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Shelf from "./components/Shelf"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <Sidebar>
      <div className="w-full h-full bg-[#121212] sm:rounded-lg overflow-hidden overflow-y-auto">
        <Header />
        <Shelf />
        <Shelf />
        <Footer />
      </div>
    </Sidebar>
  )
}
