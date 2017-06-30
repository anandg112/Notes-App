const fs = require('fs');
const _ = require('lodash');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

var duplicateNotes = notes.filter((note) => note.title === title);

if(duplicateNotes.length === 0){
  notes.push(note);
  saveNotes(notes);
  return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

 var getNote = (title) => {
  //fetch notes
  var notes = fetchNotes();
  //notes.filter, only return notes whose titles matches the argument
  var filteredNotes = notes.filter((note) => note.title === title);
  //return the note;
  return filteredNotes[0];
};

var removeNote = (title) => {
  //fetch notes
  var notes = fetchNotes();
  //filter notes, removing the title of argument
  var remainingNotes = notes.filter((note) => note.title !== title);
  //save new notes array
  saveNotes(remainingNotes);

  return notes.length !== remainingNotes.length;
};

var logNote = (note) => {
  console.log('--');
  console.log(`Note title: ${note.title}`);
  console.log(`Note body: ${note.body}`);
};

module.exports = {
  logNote,
  addNote,
  getAll,
  getNote,
  removeNote
}
