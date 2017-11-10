(function(exports) {
  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
    noteList.addNoteModel("Test");
    noteList.addNoteModel("Test2");
    noteList.addNoteModel("Testing if 20 character limit works");
    noteList.addNoteModel("this finally works, and shows the whole note");
  }

  NoteController.prototype.insertHTML = function() {
    var HTMLString = this.noteListView.noteViewURL();
    var element = document.getElementById("app");
    element.innerHTML = HTMLString;
  };

  exports.NoteController = NoteController;
})(this);

noteController = new NoteController();
noteController.insertHTML();
MakeUrlChangeShowCurrentNote();

function MakeUrlChangeShowCurrentNote() {
  window.addEventListener("hashchange", showCurrentNote);
}

function showCurrentNote() {
  showNote(getNoteFromUrl(window.location));
}

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
}

function showNote(note) {
  document
    .getElementById("note")
    .innerHTML = noteController.noteList.returnNoteTextByIndex(note);
}
