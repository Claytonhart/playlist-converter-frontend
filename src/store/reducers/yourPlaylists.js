import { GET_YOUR_PLAYLISTS } from "../actionTypes";

const yourPlaylists = (state = [], action) => {
  switch (action.type) {
    case GET_YOUR_PLAYLISTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default yourPlaylists;
