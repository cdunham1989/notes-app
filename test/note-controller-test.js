(function(exports) {
  function createHTMLForNote() {
    noteController = new NoteController();
    noteController.insertHTML();
    var element = document.getElementById("app").textContent;

    assert.isTrue(element === "TestTest2Testing if 20 characthis finally works, ");
  }

  createHTMLForNote();
})(this);
