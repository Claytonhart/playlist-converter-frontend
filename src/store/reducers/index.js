import { combineReducers } from "redux";

import playlistNames from "./playlistNames";
import finalAccessToken from "./finalAccessToken";
import initialPlaylist from "./initialPlaylist";
import finalPlaylist from "./finalPlaylist";
import failedToFindPlaylist from "./failedToFindPlaylist";
import failedToParsePlaylist from "./failedToParsePlaylist";
import finalPlaylistName from "./finalPlaylistName";
import finalPlaylistUrl from "./finalPlaylistUrl";
import initialAccessToken from "./initialAccessToken";
import topPlaylists from "./topPlaylists";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";

const rootReducer = combineReducers({
  playlistNames,
  finalAccessToken,
  initialPlaylist,
  finalPlaylist,
  failedToFindPlaylist,
  failedToParsePlaylist,
  finalPlaylistName,
  finalPlaylistUrl,
  initialAccessToken,
  topPlaylists,
  auth: authReducer,
  errors: errorsReducer
});

export default rootReducer;
