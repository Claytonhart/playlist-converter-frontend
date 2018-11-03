import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";

import "./Header.css";

class Header extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="main-nav">
        <li>
          <Link to="/playlists">Top Playlists</Link>
        </li>
        <li className="inverted">
          <Link to="/convert">Convert a playlist</Link>
        </li>
        <li>
          <Link to="/my-playlists">Your Playlists</Link>
        </li>
        <li>
          <a href="/" onClick={this.onLogoutClick}>
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="main-nav">
        <li>
          <Link to="/playlists">Top Playlists</Link>
        </li>
        <li className="inverted">
          <Link to="/convert">Convert a playlist</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    );

    return (
      <nav className="nav-container">
        <div className="header">
          <h2 className="logo">
            <Link to="/">Playlist Converter</Link>
          </h2>
          {isAuthenticated ? authLinks : guestLinks}
          {/* <ul className="main-nav">
            <li>
              <Link to="/playlists">Top Playlists</Link>
            </li>
            <li className="inverted">
              <Link to="/convert">Convert a playlist</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul> */}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
