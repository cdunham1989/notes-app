(function(exports) {

  exports.NoteListView = function(noteList = new NoteList()) {

    noteToHTML = function() {
      var arrayOfNotes = noteList.showNotes().map(function(note) {
        return note.getText();
      });
      return "<ul><li><div>" + arrayOfNotes.join("</div></li><li><div>") + "/div></li></ul>";
    };

    return {
      noteToHTML: noteToHTML,
      noteList: noteList
    };
  };
})(this);
