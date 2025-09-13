import { Form } from "react-bootstrap";

const BookSearch = ( {onSearch} ) => {

    const handleSearchBook = (bookName) => {
        onSearch(bookName.target.value);
    };

    return (
        <Form.Group className="mb-3" controlId="searchBook">
            <Form.Control
                type="text"
                placeholder="Buscar libro..."
                onChange={handleSearchBook}
            />
        </Form.Group>
    )
}

export default BookSearch;