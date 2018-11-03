import axios from "axios";
import { GET_TOP_PLAYLISTS } from "../actionTypes";

export const getTopPlaylists = () => dispatch => {
  axios
    .get("/api/playlists")
    .then(res =>
      dispatch({
        type: GET_TOP_PLAYLISTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TOP_PLAYLISTS,
        payload: []
      })
    );
};
