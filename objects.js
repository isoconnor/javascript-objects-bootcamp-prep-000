var playlist = new Object({artistName: 'songTitle' })

function updatePlayList(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}
  

