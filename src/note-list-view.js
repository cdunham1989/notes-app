(function(exports) {

  function NoteListView(noteList = new NoteList()) {
    this.noteList = noteList;
  }

  NoteListView.prototype.noteToHTML = function() {
    var arrayOfNotes = this.noteList.showNotes().map(function(note) {
      return note.getText();
    });
    return "<ul><li><div>" + arrayOfNotes.join("</div></li><li><div>") + "</div></li></ul>";
  };

  NoteListView.prototype.noteTwentyCharacters = function() {
    var arrayOfContents = this.noteList.showNotes().map(function(note) {
      return note.getText();
    });
    var arrayofStringsTwenty = arrayOfContents.map(function(string) {
      return string.substring(0, 20);
    });
    return "<ul><li><div>" + arrayofStringsTwenty.join("</div></li><li><div>") + "</div></li></ul>";
  };
  exports.NoteListView = NoteListView;
})(this);
