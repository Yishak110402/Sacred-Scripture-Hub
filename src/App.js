import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage'
import Bible from './pages/Bible'
import Navbar from "./components/Navbar";

export default function App(){

  return(
    <main>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/bible" element={<Bible/>}/>
      </Routes>

      </BrowserRouter>
    </main>
  )

}