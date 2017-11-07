(function(exports) {
  function testCreationOfNewNoteList() {
    var noteList = new NoteList();
    assert.isTrue(noteList = new NoteList());
  }

  testCreationOfNewNoteList();

  function testNoteListInstantiation() {
    var noteList = new NoteList();
    assert.isTrue(Array.isArray(noteList.showNotes()));
  }

  testNoteListInstantiation();
})(this);
