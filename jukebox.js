function parseNote(note){
if (note.indexOf("*") === -1){
}else {
  const song = {
    pitch: note.substring(0,2),
    beat: note.substring(4),
   }
 }
}
console.log (parseNote("C#*2"));


//pitch.substring(0,1)

//  let notes = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch:'D', beats: 4}];
  // Play the song at 400 beats per minute.
//  playSong(notes, 400);

 //Example usage



//pitch.indexOf(*) == 0

//parseNote("C#*2"); //=> { pitch: 'C#', beats: 2}


//parseNote("D"); //=> { pitch: 'D', beats: 1}
// Example usage
// parseSong("Ab B"); // =>; [{pitch: 'Ab', beats: 1}, {pitch: 'B', beats: 1}]
//let userSong = prompt ("play a song")
// userSong = [];

//if userInput.substring = "*"{


//} else {
//note obj = {
//  pitch: userInput[0]
//  beat: userInput[2]
// }


// C*2 => {pitch: C, beats: 2}
// C => {pitch: C, beats: 1}
