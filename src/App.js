import React from 'react';
import Header from './Header';
import Loginbutton from './Login.js'
import LogoutButton from './Logout.js'
import Profile from './Profile.js'
import MyFavoriteBooks from './MyFavoriteBooks.js'
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { withAuth0 } from "@auth0/auth0-react"
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header/>
            {/* <LogoutButton /> */}
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                {this.props.auth0.isAuthenticated ? <MyFavoriteBooks /> : <Loginbutton />}
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
