import { Route, Routes } from "react-router-dom"
import Home from "./root/pages/Home"
import RootLayout from "./root/RootLayout"


function App() {
  return (
    <main>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </main>
  )
}

export default App
