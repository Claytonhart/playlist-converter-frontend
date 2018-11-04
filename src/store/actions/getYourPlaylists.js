import axios from "axios";
import { GET_YOUR_PLAYLISTS } from "../actionTypes";

export const getYourPlaylists = () => dispatch => {
  axios
    .get("/api/playlists/user")
    .then(res =>
      dispatch({
        type: GET_YOUR_PLAYLISTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_YOUR_PLAYLISTS,
        payload: []
      })
    );
};
