import { useState } from "react";
import BookItem from "../bookItem/BookItem";
const Books = ({ books }) => {

  const [selectedBook, setSelectedBook] = useState();

  const handleSelectBook = (title) => {
    setSelectedBook(title)
  }

  return (
    <>
      <div className="m-3">
        <h5>El libro seleccionado es <spam className="text-primary fw-bold">{selectedBook}</spam></h5>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        {books.map((book) => (
          <BookItem
            title={book.title}
            author={book.author}
            rating={book.rating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={book.available}
            selectBook={handleSelectBook}
          />))
        }
      </div>
    </>
  );
}

export default Books;