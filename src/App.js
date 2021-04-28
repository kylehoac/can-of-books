import React from 'react';
import Header from './Header';
import Loginbutton from './Login.js'
import Profile from './Profile.js'
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import axios from 'axios'
import BestBooks from './BestBooks'
import { withAuth0 } from "@auth0/auth0-react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      email: '',
      books: [],
      // isError: false,
      // weather: [],
      // movie: []
    }
  }
  render() {
    const updateBooks = async() => {
      const apiUrl = 'http://localhost:3002/books'
      console.log(this.props);
      const response = await axios.get(apiUrl, {params:{email:this.props.auth0.user.email}});
      console.log('this is your response', response);
      return this.setState({ books: response.data, });
    }
    console.log('app', this.props);

    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            {/* <LogoutButton /> */}
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                {this.props.auth0.isAuthenticated ? <BestBooks user={this.props.auth0.user} updateBooks={updateBooks} books={this.state.books}/> : <Loginbutton />}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
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
