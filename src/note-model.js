(function(exports) {

  exports.NoteModel = function(text) {
    var _text = text;

    getText = function() {
      return _text;
    };

    return {
      getText: getText,
    };
  };
})(this);
