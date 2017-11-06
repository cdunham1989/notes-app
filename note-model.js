(function(exports) {
  function NoteModel() {
    this._text = "My favourite language is JavaScript";
  }

  NoteModel.prototype.getText = function() {
    return this._text;
  };

  exports.NoteModel = NoteModel;
})(this);
