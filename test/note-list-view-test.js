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
    assert.isTrue(noteListView.noteToHTML() === "<ul><li id=0><div>Word</div></li> <li id=1><div>More Words</div></li></ul>");
  }

  testCreateStringOfHTML();

  function testDisplayFirstTwentyCharacters() {
    var noteListView = new NoteListView();
    noteListView.noteList.addNoteModel("This is twenty characters");
    assert.isTrue(noteListView.noteTwentyCharacters() === "<ul><li id=0><div>This is twenty chara</div></li></ul>");
  }

  testDisplayFirstTwentyCharacters();

  function testNoteViewURL() {
    var noteListView = new NoteListView();
    noteListView.noteList.addNoteModel("This is twenty characters");
    assert.isTrue(noteListView.noteViewURL() === "<a href=#0>This is twenty chara</a><br>");
  }

  testNoteViewURL();
})(this);
