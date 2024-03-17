import { useState } from "react";
import styles from "./BookList.module.css";

export default function BookList({ books, selectedBookIndex, setSelectedBookIndex,chapter, setChapter, selectedBook, setSelectedBook, setFilterOption }) {
 

  function handleSelectedBook(index,book){
    setSelectedBookIndex(index);
    setSelectedBook(book.book)    
  }

  return (
    <div className={styles.bookListContainer}>
      <ul className={styles.bookList}>
        {books.map((book, index) => (
          <BookListItem
            index={index}
            setSelectedBookIndex={setSelectedBookIndex}
            book={book}
            handleSelectedBook={handleSelectedBook}
            selectedBook={selectedBook}
            />
        ))}
      </ul>
      {selectedBookIndex !== null && (
        <ChapterNumber books={books} selectedBookIndex={selectedBookIndex} setChapter={setChapter} chapter={chapter} />
      )}
    </div>
  );
}

function BookListItem({ book, index, handleSelectedBook, selectedBook }) {
  return <li id={selectedBook === book.book? "activeBook":""} onClick={() => handleSelectedBook(index,book)}>{book.book}</li>;
}
function ChapterNumber({ selectedBookIndex, books, setChapter, chapter }) {
  const chapterNumbers = Array.from({ length: books[selectedBookIndex].chapters },(abebeb, index) => index + 1);
  return (
    <ul className={styles.chapters}>
      {chapterNumbers.map((chapters) => (
        <li id={chapter === chapters?"activeChapter":""} onClick={() =>(setChapter(chapters))} >{chapters}</li>
      ))}
    </ul>
  );
}
