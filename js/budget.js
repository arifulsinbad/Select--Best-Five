

document.getElementById('calculate-1').addEventListener('click', function(){

 const selectString = addArray.length
 const selectNumber = parseInt(selectString);
 const input1 = inputValue('input-1');
 const correntTotal = input1 * selectNumber;

 total('player-total', correntTotal)
 


})
document.getElementById('calculate-2').addEventListener('click', function(){

 
 const playerTotal = document.getElementById('player-total');
const playerString = playerTotal.innerText;
const playerNumber = parseFloat(playerString)
 const input2 = inputValue('input-2')
 const input3 = inputValue('input-3')
 const totalAmound = playerNumber + input2 + input3;
 console.log(totalAmound)
 total('avarage-total', totalAmound)

})
