import "./styles.css";

const changeTextButton = document.getElementById("my-button");
const addDataButton = document.getElementById("add-data");
changeTextButton.addEventListener("click", function () {
  changeText();
});
addDataButton.addEventListener("click", function () {
  addData();
});

function changeText() {
  console.log("hello world");
  document.getElementById("maintext").innerHTML = "My notebook";
}

function addData() {
  //Inspiration for how to add child elements from here:https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript
  var li = document.createElement("li");
  var textAdd = document.getElementById("text-data").value;
  li.appendChild(document.createTextNode(textAdd));
  document.getElementById("list1").appendChild(li);
}
