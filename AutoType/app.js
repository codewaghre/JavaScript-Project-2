const element = document.querySelector('h1 span')
const span2 = document.querySelector('h2 span')
const span3 = document.querySelector('h1 .span-h3')

const wordsList = ['Developer.', 'Coder.', 'Teacher.', 'YouTuber.']
const wordsList2 = ['Student.', 'Dancer.', 'Singer.', 'Designer.']




function autotype(wordList, element) {
const word = "Engineering"
let wordIndex = 0
let charIndex = 0
let reverseType = false
let speedWord = 0

const intervalId = setInterval(() => {
    //Typing Speed
    if (speedWord) {
        speedWord--
        return
    }
    
    // Add word one by by from wordlist Array
    if (!reverseType) {
        speedWord = 2
        element.innerText = element.innerText + wordList[wordIndex][charIndex]
        charIndex++
    } else {
        //Removing word lenght one by one
        element.innerText = element.innerText.slice(0, element.innerText.length - 1)
        charIndex = 0
    }

    //Checks for wordlist
    if (element.innerText.length === 0 ) {
        reverseType = false
        charIndex = 0
        wordIndex++
    }

    if (wordIndex === wordsList.length) {
        wordIndex = 0
    }

    if (charIndex === wordList[wordIndex].length) {
        // clearInterval(intervalId)
        speedWord = 5
        reverseType = true
    }
}, 100)

}
autotype(wordsList, element)
autotype(wordsList2, span2)


//span 3 simple word 
const spanword = "CodeWaghre."
let reverseType = false
let charIndex = 0
let speedTest = 0
const clearId = setInterval(() => {
    //Speed text for word
    if (speedTest) {
        speedTest--
        return
    }

    //Checks and add word char in span tag
    if (!reverseType) {
    speedTest = 2
    span3.innerText =  span3.innerText + spanword[charIndex]
    charIndex++
    } else {
        span3.innerText = span3.innerText.slice(0, span3.innerText.length - 1)
        
    }
    
    // after reverse the word  ...add wrod again in span tag
    if (span3.innerText.length === 0) {
        reverseType = false
        charIndex = 0
    }
   
    //check for word lenght
    if (spanword.length === charIndex) {
        // clearInterval(clearId)
        reverseType = true
        
    }
    // console.log(hie);

}, 100)

