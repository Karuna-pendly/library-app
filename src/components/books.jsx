import { Col, Card, CardBody, CardTitle, Row } from "reactstrap";

const BookList = ({ books, handleDelete, handleEdit, setBooks }) => {
  // const books = data.books;
  // const title = props.title;

  return (
    <Row>
      {books &&
        books.map((book, index) => (
          <Col md="3">
            <Card className="mx-auto my-3">
              <CardBody>
                <CardTitle>
                  <h2>{book.title}</h2>
                  <p>Written by{book.author}</p>
                  <p>{book.subject}</p>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handleEdit(book)}>Edit</button>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
    </Row>
  );
};
export default BookList;
