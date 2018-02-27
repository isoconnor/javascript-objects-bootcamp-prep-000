var playlist = new Object({artistName: 'songTitle' })

function updateplaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
  

