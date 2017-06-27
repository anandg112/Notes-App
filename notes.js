console.log('Starting notes.js')

module.exports.addNote = (title, body) => {
  console.log('Adding note', title, body);
};

module.exports.getAll = () => {
  console.log("Getting all notes");
};

module.exports.getNote = (title) => {
  console.log("Fetching", title);
};

module.exports.removeNote = (title) => {
  console.log("Removing", title);
};
