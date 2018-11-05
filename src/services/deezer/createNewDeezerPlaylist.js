import axios from "axios";

export async function createNewDeezerPlaylist(accessToken, playlistName) {
  const corsAnywhere = `http://cors-anywhere.herokuapp.com/`;
  // const corsAnywhere = `http://crossorigin.me/`;
  // const url = `${corsAnywhere}http://api.deezer.com/user/me/playlists?request_method=POST&title=testname`;
  const url = `${corsAnywhere}http://api.deezer.com/user/me/playlists?output=json&request_method=POST&title=${playlistName}&output=jsonp&access_token=${accessToken}`;
  // const config = {
  // 	headers: {
  // 		Authorization: `Bearer ${accessToken}`
  // 	}
  // };

  // const body = {
  // 	title: `${playlistName}`
  // };

  // let response = await axios.post(url, JSON.stringify(body), config);
  let response = await axios.get(url);
  console.log(response);
  debugger;
  let { data } = response;
  let song = data.replace(/[()]/g, ""); //removes parentheses surounding the response string
  song = JSON.parse(song);
  let newDeezerApiPlaylistUrl = song.id;

  let newDeezerPlaylistUrl = `http://www.deezer.com/us/playlist/${song.id}`;
  debugger;

  return { newDeezerApiPlaylistUrl, newDeezerPlaylistUrl };
}
