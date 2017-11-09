(function(exports) {
  function SingleNote(noteModel = new NoteModel()) {
    this.noteModel = noteModel;
  }

  SingleNote.prototype.addSingleNote = function(text) {
    this.noteModel._text = text;
  };

  SingleNote.prototype.getHTML = function() {
    return "<ul><li><div>" + this.noteModel._text + "</div></li></ul>";
  };

  exports.SingleNote = SingleNote;
})(this);
