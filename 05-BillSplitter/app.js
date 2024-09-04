const billAmountInput = document.querySelector('#bill-amount')
const customTipInput = document.querySelector('.custom-tip')
const numberOfPeopleInput = document.querySelector('.number-of-people')
const generateBillBtn = document.querySelector('.generate-bill-btn')
const tipAmountOutput = document.querySelector('.tip-amount span')
const totalBillOutput = document.querySelector('.total span')
const eachPersonBillOutput = document.querySelector('.each-person-bill span')
const tipsContainer = document.querySelector('.tip-container')
const resetBtn = document.querySelector('.reset-btn')

//global variable
let tipPercentage = 0

//Generate Bill 
generateBillBtn.addEventListener('click', () => {
    // console.log("Clicked");

    //Value Selector
    const billAmountValue = parseInt(billAmountInput.value)
    // const customTip = parseInt(customTipInput.value)
    const numberOfPeople = parseInt(numberOfPeopleInput.value)

    //generate Bill
    const tipAmount = billAmountValue * (tipPercentage / 100)
    const totalBill = billAmountValue + tipAmount
    const eachBillAmount = totalBill / numberOfPeople


    //udaate value in bill
    totalBillOutput.innerHTML = `₹${billAmountValue}`
    eachPersonBillOutput.innerHTML = `₹${eachBillAmount}`
    tipAmountOutput.innerHTML = `₹${tipAmount}`
})

//select Bill Amount  //using event delegation technique
tipsContainer.addEventListener('click', (e) => {
    if (e.target != tipsContainer) {
        [...tipsContainer.children].forEach((tip) => {
            //selected class remove 
            tip.classList.remove('selected')
        })

        //selected class add
        e.target.classList.add('selected')
        tipPercentage = (parseInt(e.target.innerText));
        // console.log(tipAmount)

        customTipInput.value = ''
    }
})


//custom Tip 
customTipInput.addEventListener('input', () => {
    tipPercentage = parseInt(customTipInput.value);
    [...tipsContainer.children].forEach((tip) => {
        //selected class remove 
        tip.classList.remove('selected')
    })
    // console.log(tipAmount);

})


//billAmount checks
billAmountInput.addEventListener('input', () => {
    if (billAmountInput.value) {
        customTipInput.disabled = false
        numberOfPeopleInput.disabled = false
        tipsContainer.classList.remove('disabled')

    } else {
        customTipInput.disabled = true
        numberOfPeopleInput.disabled = true
        tipsContainer.classList.add('disabled')
        
    }
})


//Number of people count 
numberOfPeopleInput.addEventListener('input', () => {
    if (numberOfPeopleInput.value && tipPercentage)  {
        generateBillBtn.disabled = false
        resetBtn.disabled = false
    } else {
        generateBillBtn.disabled = true
        resetBtn.disabled = true 
    }
})

//Reset Bill checks
resetBtn.addEventListener('click', () => {
    console.log("wait");
    tipPercentage = 0
    billAmountInput.value = ''
    totalBillOutput.innerHTML = ''
    eachPersonBillOutput.innerHTML = ''
    tipAmountOutput.innerHTML = ''
    numberOfPeopleInput.value = '';
    [...tipsContainer.children].forEach((tip) => {
        //selected class remove 
        tip.classList.remove('selected')
    })

    customTipInput.disabled = true
    numberOfPeopleInput.disabled = true
    tipsContainer.classList.add('disabled')
    generateBillBtn.disabled = true
    resetBtn.disabled = true
})

