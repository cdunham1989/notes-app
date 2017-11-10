(function(exports) {

  function NoteList() {
    this._notes = [];
    this.id = 0;
  }

  NoteList.prototype.showNotes = function() {
    return this._notes;
  };

  NoteList.prototype.addNoteModel = function(text) {
    this._notes.push(new NoteModel(text, this.id));
    this.id += 1;
  };

  exports.NoteList = NoteList;
})(this);
