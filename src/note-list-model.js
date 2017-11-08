(function(exports) {

  exports.NoteList = function() {
    var _notes = [];

    showNotes = function() {
      return _notes;
    };

    addNoteModel = function(text) {
      _notes.push(new NoteModel(text));
    };

    return {
      showNotes: showNotes,
      addNoteModel: addNoteModel
    };
  };
})(this);
