import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';


class BestBooks extends React.Component{

componentDidMount = () => {
  console.log('apphere');
  this.props.updateBooks()
}

  render() {
    console.log(this.props);
    return (
      <>
        {
          this.props.books.map((user, index) => (
            <div key={index}>
              <h2>Name: {user.name}.</h2>
              <p>Description: {user.description}.</p>
              <p>Status: {user.status}.</p>
              <img src={user.img_Url} alt={user.title} />
            </div>
          ))
        }
      </>
    );
  };
}
export default withAuth0(BestBooks);