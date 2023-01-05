'use strict';

//const mega = Array.from({ length: 6 }, (_, i) =>
//	(Math.random() * (0 + 59) + 1).toFixed(0)
//).sort((a, b) => a - b);

function getRandomNumbers(num) {
    // Create an array of numbers from 1 to num
    const numbers = Array.from(Array(num).keys(), n => n + 1);
  
    // Shuffle the array using the sort method and a compare function
    numbers.sort(() => Math.random() - 0.5);
  
    // Extract the first num elements of the shuffled array
    return numbers.slice(0, 6);
  }
  
let mega = getRandomNumbers(60).sort((a,b) => a - b).join(' - ');
  

//console.log(newMega);

const centerBtn = document.querySelector(".centerBtn");
const numbers = document.querySelector("#numbers");
const resetBtn = document.querySelector('.bottomBtn');

centerBtn.addEventListener("click", function (e) {
	e.preventDefault();
    numbers.innerHTML = mega;
    
    if(numbers.innerHTML = mega){ 
        centerBtn.addEventListener("click", function (){
            window.location.reload();
        });
    } 
});

resetBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.reload();
})

