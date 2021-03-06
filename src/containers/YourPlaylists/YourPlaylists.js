import React, { Component } from "react";
import { connect } from "react-redux";
import { getYourPlaylists } from "../../store/actions/getYourPlaylists";

import PlaylistItem from "../../components/PlaylistItem/PlaylistItem";

class YourPlaylists extends Component {
  componentDidMount() {
    this.props.getYourPlaylists();
  }
  render() {
    console.log(this.props.yourPlaylists);
    let yourPlaylists = this.props.yourPlaylists.map(playlist => (
      <PlaylistItem
        name={playlist.name}
        username={playlist.username}
        platform={playlist.platform}
        url={playlist.url}
      />
    ));
    return (
      <section className="your-playlists">
        <h1>Your Playlists</h1>
        {this.props.yourPlaylists && yourPlaylists}
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
