import React, { Component } from "react";
import { connect } from "react-redux";
import { getYourPlaylists } from "../../store/actions/getYourPlaylists";

class YourPlaylists extends Component {
  componentDidMount() {
    this.props.getYourPlaylists();
  }
  render() {
    console.log(this.props.yourPlaylists);
    return (
      <section className="your-playlists">
        <h1>Your Playlists</h1>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  yourPlaylists: state.yourPlaylists
});

export default connect(
  mapStateToProps,
  { getYourPlaylists }
)(YourPlaylists);
