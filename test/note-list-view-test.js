(function(exports) {
  function testNoteListViewInstantiation() {
    var noteListView = new NoteListView();
    assert.isTrue(noteListView.noteList = new NoteList());
  }

  testNoteListViewInstantiation();

function testNoteViewURL() {
    var noteListView = new NoteListView();
    noteListView.noteList.addNoteModel("This is twenty characters");

    assert.isTrue(noteListView.noteViewURL() === "<a href=#0>This is twenty chara</a><br>");
  }

  testNoteViewURL();
})(this);
