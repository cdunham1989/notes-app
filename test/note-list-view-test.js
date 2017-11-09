(function(exports) {
  function testNoteListViewInstantiation() {
    var noteListView = new NoteListView();
    assert.isTrue(noteListView.noteList = new NoteList());
  }

  testNoteListViewInstantiation();

  function testCreateStringOfHTML() {
    var noteListView = new NoteListView();
    noteListView.noteList.addNoteModel("Word");
    noteListView.noteList.addNoteModel("More Words");
    assert.isTrue(noteListView.noteToHTML() === "<ul><li><div>Word</div></li><li><div>More Words</div></li></ul>");
  }

  testCreateStringOfHTML();
})(this);
