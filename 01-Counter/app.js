//QuerySelctor Tags
const count = document.querySelector('.count')
const plusBtn = document.querySelector('.plus-btn')
const minusBtn = document.querySelector('.minus-btn')
const chnageBy = document.querySelector('.changeBy')
const resetBtn = document.querySelector('.reset-btn')
// console.log(chnageBy);

//EventListner
plusBtn.addEventListener('click', () => {
    // console.log(plusBtn);
    const countValue = parseInt(count.innerText)
    // console.log(countvalue);
    const value = parseInt(countValue)
    // console.log(value);
    const inputvalue = parseInt(chnageBy.value)
    // console.log(value);
    count.innerHTML = value + inputvalue

})

minusBtn.addEventListener('click', () => {
    // console.log(minusBtn);
    const minusValue = parseInt(count.innerText)
    // console.log(minusValue);
    const inputvalue = parseInt(chnageBy.value)
    count.innerHTML = minusValue - inputvalue
})

resetBtn.addEventListener('click', () => {
    count.innerHTML = 0
    chnageBy.value = 1
})







