function inputValue(element){
 const inputField = document.getElementById(element);
 const inputString = inputField.value;
 const inputNumber = parseFloat(inputString);
 if(isNaN(inputNumber)){
  alert('Number Please')
 
 }
 return inputNumber;
}
function total(element, value){
 const totalField = document.getElementById(element);
 totalField.innerText = value;

}

function DisableNextButton(btnId) {
 document.getElementById(btnId).disabled = 'true';
 const colorChang = document.getElementById(btnId);
 colorChang.style.backgroundColor = 'gray'
}