var playlist = new Object({artist: 'songTitle' })

function updatePlayList(playlist, artistName, songTitle){
  Object.assign({}, playlist, { [artistName]: songTitle });
}
  

