import "./styles.css";

var addCommentButton = document.getElementById("add-comment");
var removeCommentsButton = document.getElementById("remove-comments");
var list = document.getElementById("list");

// Add comment from the textarea to the list
addCommentButton.addEventListener("click", function () {
  var textAreaValue = document.getElementById("comment-area").value;
  list.innerHTML += "<li>" + textAreaValue + "</li>";
});

// Remove all comments from the list
removeCommentsButton.addEventListener("click", function () {
  window.confirm("Are you sure you want to remove all comments?");
  list.innerHTML = "";
});
