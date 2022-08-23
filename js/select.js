const addArray = [];

function player(players){
 const tableBody = document.getElementById('tbody');
 tableBody.innerHTML = '';
 for(let i = 0; i < players.length; i++){
  const element = addArray[i].nameValue;
  if(element === i){
   player.setAttr
  }

  const tr = document.createElement('tr');
 tr.innerHTML = `
 <th> ${i + 1.}</th>
 <td> ${element}</td>
 `;
 tableBody.appendChild(tr);

 }


}

function selectBtn(select){

const nameValue = select.parentNode.children[0].innerText;

const addObject = {
 nameValue: nameValue
}


if(addArray.length < 5){

 
 addArray.push(addObject);
}
else{
 alert('Sorry,Add Not Available')
}

 const selected = document.getElementById('select-5');
 selected.innerText = addArray.length;

player(addArray)

}

function DisableNextButton(btnId) {
 document.getElementById(btnId).disabled = 'true';
 const colorChang = document.getElementById(btnId);
 colorChang.style.backgroundColor = 'gray'
}



 



