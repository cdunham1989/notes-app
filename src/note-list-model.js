(function(exports) {

  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype.showNotes = function() {
    return this._notes;
  };

  NoteList.prototype.addNoteModel = function(text) {
    this._notes.push(new NoteModel(text, this.id));
  };

  exports.NoteList = NoteList;
})(this);
