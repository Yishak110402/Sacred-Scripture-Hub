import { useState } from "react";
import BookList from "../components/Bible/BookList";
import OpenChapter from "../components/Bible/OpenChapter";

export default function Bible({ books, setBooks }) {
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);
  const [selectedBook, setSelectedBook] = useState("Genesis");
  const [chapter, setChapter] = useState(1);
  

  return (
    <div style={{ display: "flex", justifyContent: "space-between", backgroundColor:"#FFEDD5", color:"#FFEDD5"}}>
      <BookList
        books={books}
        selectedBookIndex={selectedBookIndex}
        setSelectedBookIndex={setSelectedBookIndex}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
        chapter={chapter}
        setChapter={setChapter}
      />
      <OpenChapter
      setChapter={setChapter}
       selectedBook={selectedBook} 
       chapter={chapter}
       />
    </div>
  );
}
