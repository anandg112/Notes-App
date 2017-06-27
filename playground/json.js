// var obj = {
//   name: 'Andrew'
// };
//
// var strObj = JSON.stringify(obj);
// console.log(typeof (strObj));
// console.log(strObj);

// var personStr = '{"name": "Andrew", "age": 42}';
//
// var person = JSON.parse(personStr);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

//

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
