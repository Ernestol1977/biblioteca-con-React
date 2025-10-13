import { useState } from 'react';
import Books from './components/library/books/Books';
import NewBook from './components/library/newBook/NewBook';
import Login from './components/auth/Login';

const App = () => {

  const books = [
    {
      id:1,
      title: "Harry Potter 1",
      author: "J.K. Rowling",
      rating: 4,
      pageCount: 800,
      imageUrl: "https://acdn-us.mitiendanube.com/stores/001/542/126/products/9789878000107-b82c22cfb174dca93016944484618644-1024-1024.jpg",
      available: true,
      summary: "Un niño huérfano descubre que es un mago y comienza su educación en Hogwarts, enfrentándose a sus primeros desafíos mágicos.",
    },
    {
      id:2,
      title: "El Señor de los Anillos",
      author: "J.R.R. Tolkien",
      rating: 5,
      pageCount: 1200,
      imageUrl: "https://images.cdn1.buscalibre.com/fit-in/360x360/66/1a/661a3760157941a94cb8db3f5a9d5060.jpg",
      available: false,
      summary: "Un grupo de héroes emprende un viaje épico para destruir un anillo de poder maligno que amenaza con dominar la Tierra Media.",
    },
    {
      id:3,
      title: "Dune",
      author: "Frank Herbert",
      rating: 1,
      pageCount: 900,
      imageUrl: "https://images.cdn2.buscalibre.com/fit-in/360x360/0d/73/0d739e6e0e837d7637f97f9aad3639b4.jpg",
      available: true,
      summary: "En un planeta desértico donde la especia es la sustancia más valiosa del universo, un joven se convierte en el líder de una rebelión que cambiará el destino de todos.",
    },
    {
      id:4,
      title: "1984",
      author: "George Orwell",
      rating: 4,
      pageCount: 230,
      imageUrl: "https://images.cdn1.buscalibre.com/fit-in/360x360/b0/39/b039af065268818b7bd3b0e016f8db65.jpg",
      available: true,
      summary: "En un mundo gobernado por un régimen totalitario, un hombre lucha contra la vigilancia constante y la manipulación de la verdad.",
    },
  ];
  
  const [bookList, setBookList] = useState(books);

  const handleBookAdded = (enteredBook) => {
    const newBookData = {
      id: Math.round(Math.random() * 100),
      ...enteredBook
    };
    console.log(newBookData);

    setBookList(prevBookList => [newBookData, ...prevBookList])
  }; // generalmente se realiza de manera inversa

  const handleBookDeleted = (id) => {
    setBookList((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      {<Login />} 
      <h2>Books Champion App</h2>
      <p>Quiero leer libros!</p>
      <NewBook onBookAdded={handleBookAdded} />
      <Books books={bookList} onDeleteBook={handleBookDeleted} />
    </div>
  )
}

export default App;