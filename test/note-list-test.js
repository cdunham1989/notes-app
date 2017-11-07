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

  function testNoteStorage() {
    var noteList = new NoteList();
    noteList.addNoteModel("Hi");
    assert.isTrue(noteList.showNotes().pop().getText() === "Hi");
  }

  testNoteStorage();
})(this);
