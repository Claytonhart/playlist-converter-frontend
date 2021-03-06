export function spotifyAuth(initialPlaylist) {
  const url = {
    authEndpoint: "https://accounts.spotify.com/authorize/",
    // client_id: "ff95d3ccaa6b43b6aa80410010f6072a",
    client_id: "93a42e2fe74243afa477786dd10fb87b",
    redirect_uri: `http://localhost:3000/auth`,
    scope: "playlist-modify-public playlist-modify-private"
  };
  const { authEndpoint, client_id, redirect_uri, scope } = url;
  const urlString = `${authEndpoint}?
				client_id=${client_id}&
				redirect_uri=${redirect_uri}&
				scope=${scope}&
				response_type=token`;
  const name = `${initialPlaylist}_Auth`;

  const width = 500;
  const height = 500;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const specs = `width=${width},height=${height},left=${left},top=${top}`;

  return { urlString, name, specs };
}
