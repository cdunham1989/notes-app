(function(exports) {
  function testSingleNoteAddNote() {
    var singleNote = new SingleNote();
    singleNote.addSingleNote("test");
    assert.isTrue(singleNote.noteModel._text === "test");
  }

  testSingleNoteAddNote();

  function testSingleNoteReturnsHTML() {
    var singleNote = new SingleNote();
    singleNote.addSingleNote("test");
    assert.isTrue(singleNote.getHTML() === "<ul><li><div>test</div></li></ul>");
  }

  testSingleNoteReturnsHTML();
})(this);
