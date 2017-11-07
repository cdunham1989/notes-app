(function(exports) {
  function testCreationOfNewNote() {
    var noteModel = new NoteModel();
    assert.isTrue(noteModel = new NoteModel());
  }

  testCreationOfNewNote();

  function testNoteInstantiation() {
    var noteModel = new NoteModel();
    assert.isTrue(noteModel.getText() === "My favourite language is JavaScript");
  }

  testNoteInstantiation();
})(this);
