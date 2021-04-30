import React from "react";
import Header from "./Header";
import Loginbutton from "./Login.js";
import BookForm from "./BookForm.js";
import Profile from "./Profile.js";
import IsLoadingAndError from "./IsLoadingAndError";
import Footer from "./Footer";
import axios from "axios";
import BestBooks from "./BestBooks";
import { Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleForm = this.toggleForm.bind(this);
    this.state = {
      searchQuery: "",
      books: [],
      hideForm: true,
    };
  }

  toggleForm(hideForm) {
    this.setState({ hideForm });
  }

  render() {
    const updateBooks = async () => {
      const apiUrl = "http://localhost:3002/books";
      console.log(this.props);
      const response = await axios.get(apiUrl, {
        params: { email: this.props.auth0.user.email },
      });
      console.log("this is your response", response);
      return this.setState({ books: response.data });
    };
    console.log("app", this.props);

    const createBooks = (allBooksArr) => {
      console.log(allBooksArr);
      if (typeof allBooksArr === "string") {
        console.error(allBooksArr);
      } else {
        this.setState({ books: allBooksArr, hideForm: true });
      }
    };

    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            {this.state.hideForm === true ? (
              <Button onClick={() => this.toggleForm(false)}>Add Books</Button>
            ) : (
              <BookForm
                getBooks={this.state.getBooks}
                createBooks={createBooks}
                onClose={() => this.toggleForm(true)}
              />
            )}
            <Switch>
              <Route exact path="/">
                {this.props.auth0.isAuthenticated ? (
                  <BestBooks
                    user={this.props.auth0.user}
                    updateBooks={updateBooks}
                    books={this.state.books}
                  />
                ) : (
                  <Loginbutton />
                )}
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="*">
                <h1> 😔 </h1>
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
