function getRandom (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

let verificatedNumber = [];
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

alert('Memorizza bene i seguenti numeri');
output.innerHTML = numbers; 


setTimeout (function() {
    output.innerHTML = '';
}, 30000);

setTimeout (function() {
    for (let i = 0; i < 5; i++) {
        userNumber = parseInt(prompt('Inserire uno dei numeri precedentemente visualizzati!'));
        if (numbers.includes(userNumber)) {
            verificatedNumber.push(userNumber);
        }
        sum += userNumber + ',';
    }
}, 31000);

setTimeout (function () {
    output.innerHTML = 'Numeri precedentemente mostrati: ' + numbers + '!! Numeri da lei inseriti: ' + sum + '!!' + ' Numeri totali indovinati: ' + verificatedNumber.length + '! Questi sono: ' + verificatedNumber; 
}, 31500);

