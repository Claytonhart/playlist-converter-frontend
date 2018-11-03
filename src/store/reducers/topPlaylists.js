import { GET_TOP_PLAYLISTS } from "../actionTypes";

const topPlaylists = (state = [], action) => {
  switch (action.type) {
    case GET_TOP_PLAYLISTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default topPlaylists;
