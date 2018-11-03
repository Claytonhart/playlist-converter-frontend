import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopPlaylists } from "../../store/actions/getTopPlaylists";

class Playlists extends Component {
  componentDidMount() {
    this.props.getTopPlaylists();
  }

  render() {
    let topPlaylists = this.props.topPlaylists.map(playlist => (
      <div className="top-playlist-item" key={playlist._id}>
        <div className="top-playlist-item__name">Name: {playlist.name}</div>
        <div className="top-playlist-item__name">
          Platform: {playlist.platform}
        </div>
        <div className="top-playlist-item__name">Link: {playlist.url}</div>
      </div>
    ));
    return (
      <section className="playlists">
        <h1>PLAYLISTS</h1>
        {this.props.topPlaylists && topPlaylists}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  topPlaylists: state.topPlaylists
});

export default connect(
  mapStateToProps,
  { getTopPlaylists }
)(Playlists);
