(function(exports) {
  function createHTMLForNote() {
    noteController = new NoteController();
    noteController.insertHTML();
    var element = document.getElementById("app").textContent;

    assert.isTrue(element === "TestTest2");
  }

  createHTMLForNote();
})(this);
