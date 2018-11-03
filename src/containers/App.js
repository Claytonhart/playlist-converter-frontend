import React, { Component } from "react";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import { setCurrentUser, logoutUser } from "../store/actions/authActions";

import Main from "./Main/Main";
import Navbar from "../components/Header/Header";

const store = configureStore();

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    // window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="app-container">
            <Navbar />
            <Main />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
