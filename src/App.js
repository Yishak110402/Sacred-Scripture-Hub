import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage'
import Bible from './pages/Bible'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { book } from "./book";
import { useState } from "react";

export default function App(){

  const [books, setBooks] = useState(book)

  return(
    <main>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Homepage/>}/>
        {/* <Route path="/home" element={<Homepage/>}/> */}
        <Route path="/bible" element={<Bible setBooks={setBooks} books={books}/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </main>
  )

}