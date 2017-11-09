(function(exports) {
  function NoteController( noteList = new NoteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
    noteList.addNoteModel("Test");
  }

  NoteController.prototype.insertHTML = function() {
    var HTMLString = this.noteListView.noteToHTML();
    var element = document.getElementById("app");
    element.innerHTML = HTMLString;
  };

  exports.NoteController = NoteController;
})(this);

noteController = new NoteController();
noteController.insertHTML();
