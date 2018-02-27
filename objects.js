var playlist = new Object({ Diplo: 'Lean On' })

function updatePlayList(playlist, artistName, songTitle){
  Object.assign({}, playlist, { [artistName]: songTitle });
}
  

