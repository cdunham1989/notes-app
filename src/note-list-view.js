(function(exports) {

  function NoteListView(noteList = new NoteList()) {
    this.noteList = noteList;
  }

  NoteListView.prototype.notesToArray = function() {
    var array = this.noteList.showNotes().map(function(note, index) {
      return note.getText();
    });
    return array;
  };

  NoteListView.prototype.noteToHTML = function() {
    var arrayOfNotes = this.notesToArray();
    var arrayHTML = arrayOfNotes.map(function(text, index) {
      return "<li id=" + index + "><div>" + text + "</div></li>";
    });
    return "<ul>" + arrayHTML.join(" ") + "</ul>";
  };

  NoteListView.prototype.noteTwentyCharacters = function() {
    var arrayOfContents = this.notesToArray();
    var arrayofStringsTwenty = arrayOfContents.map(function(string) {
      return string.substring(0, 20);
    });
    var arrayHTML = arrayofStringsTwenty.map(function(text, index) {
      return "<li id=" + index + "><div>" + text + "</div></li>";
    });
    return "<ul>" + arrayHTML.join(" ") + "</ul>";
  };

  NoteListView.prototype.noteViewURL = function(string) {
    var arrayOfNotes = this.notesToArray();
    var arrayofStringsTwenty = arrayOfNotes.map(function(string) {
      return string.substring(0, 20);
    });
    var arrayHTML = arrayofStringsTwenty.map(function(text, index) {
      return "<a href=#" + index + ">" + text + "</a><br>";
    });
    return arrayHTML.join('');
  };

  exports.NoteListView = NoteListView;
})(this);
