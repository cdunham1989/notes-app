(function(exports) {
  function testNoteInstantiation() {
    var noteModel = new NoteModel("My favourite language is JavaScript");
    assert.isTrue(noteModel.getText() === "My favourite language is JavaScript");
  }

  testNoteInstantiation();
})(this);
