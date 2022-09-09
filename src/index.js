import "./styles.css";

if (document.readyState !== "loading") {
  // Document ready, executing
  console.log("Document ready, executing");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    // Document was not ready, executing when loaded
    console.log("Document ready, executing after a wait");
    initializeCode();
  });
}

function initializeCode() {
  var printToConsole = document.getElementById("my-button");
  var hwTag = document.getElementsByTagName("h1")[0]; //returns an array!
  var addCommentButton = document.getElementById("add-comment");
  //var removeCommentsButton = document.getElementById("remove-comments");
  //var list = document.getElementById("add-data");
  var list = document.getElementsByTagName("ul")[0]; //returns an array!

  // Print Hello World to console
  printToConsole.addEventListener("click", function () {
    console.log("Hello World!");
    hwTag.innerHTML = "My notebook";
  });

  // Add comment from the textarea to the list
  addCommentButton.addEventListener("click", function () {
    var textAreaValue = document.getElementById("comment-area").value;
    var tag = document.createElement("li");
    var text = document.createTextNode(textAreaValue); //must create a node to add text
    tag.appendChild(text);
    list.appendChild(tag); //put the text inside the <li> tag
    //list.innerHTML += "<li>" + textAreaValue + "</li>";
  });

  // Remove all comments from the list
  //removeCommentsButton.addEventListener("click", function () {
  //  var res = window.confirm("Are you sure you want to remove all comments?");
  //  if (res == true) {
  //    list.innerHTML = "";
  //  }
  //});
}
