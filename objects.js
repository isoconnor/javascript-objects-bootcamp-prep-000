var playlist = new Object({artistName: 'songTitle' });

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function deleteFromPlaylist(playlist, artistName, songTitle){
  delete playlist[artistName];
  return playlist;
}
