(function(exports) {

  exports.NoteModel = function(text, id) {
    var _text = text;
    id = id;

    getText = function() {
      return _text;
    };

    getID = function() {
      return id;
    };

    return {
      getText: getText,
      getID: getID
    };
  };
})(this);
