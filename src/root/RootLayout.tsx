import Footer from "@/components/shared/Footer"
import NavBar from "@/components/shared/NavBar"
import { Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default RootLayout
