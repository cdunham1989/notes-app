(function(exports) {
  function createHTMLForNote() {
    noteController = new NoteController;
    noteController.insertHTML();
    var element = document.getElementById("app");
    assert.isTrue(element.innerHTML === "<ul><li><div>Test</div></li></ul>");
  }

  createHTMLForNote();
})(this);
