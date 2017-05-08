'use strict';

var addButton = document.querySelector('button');
var inputField = document.querySelector('input').value;
var inputFieldBox = document.querySelector('input');

function enterDown() {
  document.addEventListener('keydown', function (event) {
    var KEY = event.keyCode;
    var KEY_ENTER = 13;
    if (KEY == KEY_ENTER) {
      addButton.click();
    }
  });
}
enterDown();

function createTask() {
  addButton.addEventListener('click', function () {
    var inputField = document.querySelector('input').value;
    var newLi = document.createElement('li');
    var ul = document.querySelector(".ul");

    if (inputField.replace(/^\s+|\s+$/g, "").length != 0) {
      var removeField = document.createElement('button');
      removeField.innerHTML = "remove";
      removeField.classList.add('removeBtn');
      newLi.appendChild(document.createTextNode(inputField));
      ul.appendChild(newLi);
      newLi.appendChild(removeField);
      var clearField = document.querySelector('input');
      clearField.value = '';
      if (removeField) {
        removeField.addEventListener('click', function (e) {
          ul.removeChild(newLi);
        });
      }
    };
  });
};
createTask();
//# sourceMappingURL=sourcemaps/main.js.map
