(function(exports) {
  function NoteModel(text) {
    this._text = text;
  }

  NoteModel.prototype.getText = function() {
    return this._text;
  };

  exports.NoteModel = NoteModel;
})(this);
