import React from "react";
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getBooks: [],
      bookName: "",
      bookDesc: "",
      bookStat: "",
      email: "",
      show: true,
    };
  }

  // updateEmail = (email) => this.setState({ bookPersonEmail: email });
  // updateBooks = (books) => this.setState({ newBooks });

  createBooks = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:3002";
    const books = await axios.post(`${apiUrl}/books`, {
      newBook: {
        name: this.state.bookName,
        description: this.state.bookDesc,
        status: this.state.bookStat,
      },
      email: this.props.auth0.user.email,
    });
    const allBooksArr = books.data;
    this.props.createBooks(allBooksArr);
  };

  render() {
    return (
      <>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.createBooks}>
              <Form.Group>
                <Form.Label>New Book Info</Form.Label>
                <Form.Control
                  type="Book Name"
                  placeholder="Please enter your new book"
                  onChange={(e) => this.setState({ bookName: e.target.value })}
                />
                <Form.Control
                  type="Book Desc"
                  placeholder="Please enter a brief description of the book"
                  onChange={(e) => this.setState({ bookDesc: e.target.value })}
                />
                <Form.Control
                  type="Book Stat"
                  placeholder="Please enter the status of the book"
                  onChange={(e) => this.setState({ bookStat: e.target.value })}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.onClose} variant="secondary">
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </>
    );
  }
}
export default withAuth0(BookFormModal);
