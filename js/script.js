function getRandom (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

let userNumber = [];
let sum = ' ';
const numbers = [];
const output = document.querySelector('.output'); 

while (numbers.length < 5) {
    const randomNumber = getRandom(1, 50);
    if(!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
    }
} 

setTimeout (function () {
    alert('Memorizza bene i seguenti numeri');
    output.innerHTML = numbers; 
}, 500);

setTimeout (function() {
    output.innerHTML = '';
}, 3000);

setTimeout (function() {
    for (let i = 0; i < 5; i++) {
        userNumber = parseInt(prompt('Inserire uno dei numeri precedentemente visualizzati!'));
        sum += userNumber + ',';
    }
}, 4000);

setTimeout (function () {
    if (sum === numbers) {
        output.innerHTML = 'Complimenti, i numeri da te inseriti sono corretti!!' + ' ' + 'Numeri precedentemente mostrati: ' + numbers + '!! Numeri da lei inseriti: ' + sum + '!!'; 
    } else {
        output.innerHTML = 'Spiacenti, i numeri da te inseriti sono errati!!' + ' ' + 'Numeri precedentemente mostrati: ' + numbers + '!! Numeri da lei inseriti: ' + sum + '!!'; 
    }
}, 5000);

