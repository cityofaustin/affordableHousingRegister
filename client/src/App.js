import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import NavBar from './components/Navbar'
import Register from './components/Register'


class App extends Component {
  render() {

    const Page404 = ({ location }) => (
      <div className="jumbotron">
        <h1 className="display-4">404 Error</h1>
        <p className="lead">We couldn't find your page!</p>
        <p><Link to="/">Go Home</Link></p>
      </div>
    );

    return (

      <Router>
        <div className="App">
          <NavBar />
          <ToastContainer autoClose={8000} />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Register} />
                <Route component={Page404} />
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
