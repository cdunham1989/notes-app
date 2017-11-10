(function(exports) {

  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype.showNotes = function() {
    return this._notes;
  };

  NoteList.prototype.addNoteModel = function(text) {
    this._notes.push(new NoteModel(text));
  };

  NoteList.prototype.returnNoteTextByIndex = function(index) {
    return this._notes[index].getText();
  };

  exports.NoteList = NoteList;
})(this);
