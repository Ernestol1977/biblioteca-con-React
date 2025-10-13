import { useState } from "react";
import { Badge, Card, Button } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import ConfirmDeleteBook from "../../ui/deleteBook/ConfirmDeleteBook";


const BookItem = ({ id, title, author, rating, pageCount, imageUrl, available, onDeleteBook }) => {
  // const [newTitle, setNewTitle] = useState(title);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    // setNewTitle("Actualizado");
    // console.log(newTitle);
    // nSelectBook(title)
    navigate(`${id}`, {
      state: {
        book: {
          title,
          author,
          rating,
          pageCount,
          imageUrl,
          summary,
          available,
        },
      },
    });
  };

  const handleDeleteBook = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDeleteBook(id); 
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  // console.log("BookItem evaluado por React");

  const starRating = (rating) => {
    return (
      <>
        {Array.from({ length: 5 }, (_, i) =>
          i < rating ? (
            <StarFill key={i} color="gold" size={20} />
          ) : (
            <Star key={i} color="gold" size={20} />
          )
        )}
      </>

    )
  };

  return (
    <>
      <Card style={{ width: '22rem' }} className="mx-3 mt-4">
        <Card.Img
          height={400}
          variant="top"
          alt="Image not found"
          src={imageUrl !== "" ? imageUrl : "https://images.pexels.com/photos/9247610/pexels-photo-9247610.jpeg"}
        />
        <Card.Body>
          <div className="mb-2">
            {available ?
              <Badge bg="success">Disponible</Badge>
              :
              <Badge bg="danger">Reservado</Badge>
            }
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
          <div>{starRating(rating)}</div>
          <p>{pageCount} páginas</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
            <Button onClick={handleClick}>Seleccionar libro</Button>
            <Button variant="outline-danger" onClick={handleDeleteBook}>Borrar libro</Button>
          </div>
        </Card.Body>
      </Card>

      <ConfirmDeleteBook 
        show={showModal}
        onHide={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        bookTitle={title} />
    </>
  )
}

export default BookItem;