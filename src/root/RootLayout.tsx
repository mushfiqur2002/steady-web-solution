import NavBar from "@/components/shared/NavBar"
import { Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default RootLayout
