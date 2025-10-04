import { Badge, Card, Button } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";

const BookItem = ({ title, author, rating, pageCount, imageUrl, available, onSelectBook }) => {
  // const [newTitle, setNewTitle] = useState(title);

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
    return (
      console.log(title)
    )
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
          <Button onClick={handleDeleteBook} variant="outline-danger">Borrar libro</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default BookItem;