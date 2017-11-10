(function(exports) {
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

  function testNoteID() {
    var noteList = new NoteList();
    noteList.addNoteModel("test0");
    noteList.addNoteModel("test1");
    noteList.addNoteModel("test2");
    assert.isTrue(noteList.showNotes().pop().getID() === 2);
  }

  testNoteID();
})(this);
