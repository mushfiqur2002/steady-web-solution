import { Route, Routes } from "react-router-dom"
import Home from "./root/pages/Home"
import RootLayout from "./root/RootLayout"
import About from "./root/pages/About"
import Project from "./root/pages/Project"
import Contact from "./root/pages/Contact"


function App() {
  return (
    <main>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/our-projects" element={<Project />}></Route>
          <Route path="/our-contacts" element={<Contact />}></Route>
        </Route>
      </Routes>
    </main>
  )
}

export default App
