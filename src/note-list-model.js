(function(exports) {
  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype.showNotes = function() {
    return this._notes;
  };

  exports.NoteList = NoteList;
})(this);
