

; (() => {
    const userInput = document.querySelector('.user-input')
    const form = document.querySelector('form')
    const result = document.querySelector('.result')
    const allGuesses = document.querySelector('.all-guesses')
    const submitBtn = document.querySelector('.submit-btn')
    const startGameBtn = document.querySelector('.start-game')
    const remainingGuess = document.querySelector('.remain-guess')
    // console.log(remainingGuess);


    const allGuessesArray = []
    let randomNumber = Math.round(Math.random() * 100)

    //Form Event Listener
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        // console.log("submitted");
        const userInputValue = +userInput.value
        // console.log(typeof  userInputValue);

        //Checks for Games
        if (randomNumber === userInputValue) {
            result.innerText = "you got it! Congrates :))))"
            submitBtn.disabled = true
            startGameBtn.disabled = false
        } else if (randomNumber < userInputValue) {
            result.innerHTML = "Too High"
        } else if (randomNumber > userInputValue) {
            result.innerHTML = "Too Low"
        }

        // Show Guess Number 
        allGuessesArray.push(userInputValue)
        allGuesses.innerHTML = `your Gueess :- ${allGuessesArray}`
        form.reset()

    })

    startGameBtn.addEventListener('click', (e) => {
        e.preventDefault()

        userInput.value = ''
        result.innerText = ''
        allGuesses.innerHTML = ''
        startGameBtn.disabled = true
        submitBtn.disabled = false
        randomNumber = Math.round(Math.random() * 100)

    })

})()