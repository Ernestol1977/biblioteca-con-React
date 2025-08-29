import { useState } from "react";
import { Badge, Card, Button } from "react-bootstrap";

const BookItem = ({ title, author, rating, pageCount, imageUrl, available, selectBook }) => {
  // const [newTitle, setNewTitle] = useState(title);

  const handleClick = () => {
    // setNewTitle("Actualizado");
    selectBook(title)
    
  };

  // console.log("BookItem evaluado por React");

  return (
    <Card style={{ width: '22rem' }} className="mx-3">
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
        <div>{rating} estrella{rating > 1 ? "s" : ""}</div>
        <p>{pageCount} páginas</p>
        <Button onClick={handleClick}>
          Selccionar libro
        </Button>
      </Card.Body>
    </Card>
  )
}

export default BookItem;