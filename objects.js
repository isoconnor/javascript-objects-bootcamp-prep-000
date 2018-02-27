var playlist = { Diplo: "Lean On"};

function updatePlayList(playlist, artistName, songTitle){
  Object.assign({}, playlist, { [artistName]: songTitle });
}
  

