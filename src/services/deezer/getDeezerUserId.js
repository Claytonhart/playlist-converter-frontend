import axios from "axios";

export async function getDeezerUserId(accessToken) {
  const corsAnywhere = `http://cors-anywhere.herokuapp.com/`;
  const url = `${corsAnywhere}http://api.deezer.com/user/me`;

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };

  let response = await axios.get(url, config);
  debugger;
  let { id } = response.data;
  return id;
}
