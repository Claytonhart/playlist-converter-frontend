import axios from "axios";

export async function getSpotifyUserId(accessToken) {
  // const corsAnywhere = `http://cors-anywhere.herokuapp.com/`;
  // const url = `${corsAnywhere}http://api.spotify.com/v1/me`;
  const url = `https://api.spotify.com/v1/me`;

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
  debugger;
  let response = await axios.get(url, config);
  let { id } = response.data;
  return id;
}
