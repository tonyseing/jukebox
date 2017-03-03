// return parsed note object { pitch: , beat: }

// parse note without beat
// return { pitch: , beat: 1 }

// parse note with beat

function parseNote(note){
  // note without beat
  let parsedNote;
  if (note.indexOf("*") === -1){
    parsedNote = {
      pitch: note,
      beat: 1
    };
  }
  // note with beat
  else {
    let parsedNoteArray = note.split('*');
    //['C#', '2']

    parsedNote = {
      pitch: parsedNoteArray[0],
      beat: parseInt(parsedNoteArray[1]),
    }
  }

  return parsedNote;
}


console.log (parseNote("C#"));
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
