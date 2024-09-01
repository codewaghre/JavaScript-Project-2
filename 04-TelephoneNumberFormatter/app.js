
//Selector and Varibles
const input = document.querySelector('input')
const number = document.querySelector('.number')

let previousValue = ''
let firstThreeNumbers = ''

input.addEventListener('input', (e) => {
    //reguler expression try 
    // e.value = e.value.replace(/[^0-9]/g, '');

    const inputValue = e.target.value
    
    //Checks for input value is Number Or Not
    if (/\d+$/g.test(inputValue)) {
        input.value = inputValue
    } else {
        input.value = inputValue.substring(0, inputValue.length - 1)
    }

    //Checks and Understad for PreviousValue and InputValue in Console
    //  console.log(previousValue, inputValue);

    //Checks for Understanding and update the Input 
    if (inputValue.length === 2 && previousValue.length < inputValue.length) {
        firstThreeNumbers = inputValue.substring(0, 3)
        const value = `+ (${firstThreeNumbers}) - `
        console.log(value);
        input.value = `${value}`

    }

    //Checks For removing the input value
    else if (inputValue.length === 9 && previousValue.length > inputValue.length) {
        input.value = firstThreeNumbers

    }

    number.innerText =  "Telephone Number is :- " + inputValue
    previousValue = inputValue
})
