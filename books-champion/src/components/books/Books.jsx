import { useState } from "react";
import BookItem from "../bookItem/BookItem";
import BookSearch from "../bookSearch/BookSearch";
const Books = ({ books }) => {

  const [selectedBook, setSelectedBook] = useState();
  const [searchBook, setSearchBook] = useState("");
    
  // dentro de handleSelectBook, title es = a lo que escucha onSearch
  const handleSelectBook = (title) => {
    setSelectedBook(title)
  }

  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchBook.toLowerCase()))

  return (
    <>
      <BookSearch onSearch = {setSearchBook}/>
      <div className="m-3">
        <h5>El libro seleccionado es: <spam className="text-primary fw-bold">{selectedBook}</spam></h5>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        { filteredBooks.length > 0 ? filteredBooks.map((book) => (
          <BookItem
            title={book.title}
            author={book.author}
            rating={book.rating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={book.available}
            onSelectBook={handleSelectBook}
          />)) : <p>No se encontró libro</p>
        }
      </div>
    </>
  );
}

export default Books;