import React from "react";
import "./PlaylistItem.css";

const PlaylistItem = ({ name, username, platform, url }) => {
  return (
    <div className="playlist-item">
      <div className="playlist-item__name">{name}</div>
      <div className="playlist-item__username">{username}</div>
      <div className="playlist-item__platform">{platform}</div>
      <div className="playlist-item__url">
        <a href={`https://${url}`} target="_blank" rel="noopener">
          Link
        </a>
      </div>
    </div>
  );
};

export default PlaylistItem;
