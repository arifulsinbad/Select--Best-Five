const addArray = [];

function player(players){
 const tableBody = document.getElementById('tbody');
 tableBody.innerHTML = '';
 for(let i = 0; i < players.length; i++){
  const element = addArray[i].nameValue;
  
  if(i === 5){
   
   alert('Sorry , You are not available')
   break;
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
console.log(nameValue)
const addObject = {
 nameValue: nameValue
}

addArray.push(addObject);

 const selected = document.getElementById('select-5');
 selected.innerText = addArray.length;
 
player(addArray)

}
function disable(x){
 x.disable = true;
}

 



