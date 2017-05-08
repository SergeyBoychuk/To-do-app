const addButton = document.querySelector('button');
let inputField = document.querySelector('input').value;
let inputFieldBox = document.querySelector('input');

function enterDown() {
  document.addEventListener('keydown',function(event) {
  let KEY = event.keyCode;
  let KEY_ENTER = 13
    if(KEY == KEY_ENTER) {
    addButton.click();
    }
  })
}
enterDown();





function createTask () {
  addButton.addEventListener('click', () => {
  let inputField = document.querySelector('input').value;
  let newLi = document.createElement('li');
  let ul = document.querySelector(".ul");

  if(inputField.replace(/^\s+|\s+$/g, "").length != 0) {
    let removeField = document.createElement('button');
    removeField.innerHTML = "remove";
    removeField.classList.add('removeBtn');
    newLi.appendChild(document.createTextNode(inputField));
    ul.appendChild(newLi);
    newLi.appendChild(removeField);
    let clearField = document.querySelector('input');
    clearField.value = '';
    if(removeField) {
      removeField.addEventListener('click', (e) => {
        ul.removeChild(newLi);
      });
    }
  };




  });
};
createTask();




