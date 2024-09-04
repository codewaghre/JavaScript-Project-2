//Dom Query Selector 
const input = document.querySelector('input')
const lowerCaseOutput = document.querySelector('#lowercase span')
const upperCaseOutput = document.querySelector('#uppercase span')
const camelCaseOutput = document.querySelector('#camelcase span')
const pascalCaseOutput = document.querySelector('#pascalcase span')
const snakeCaseOutput = document.querySelector('#snakecase span')
const kebabCaseOutput = document.querySelector('#kebabcase span')
const trimCaseOutput = document.querySelector('#trim span')


//Captialixation of  word
function capitalizeString(word) {
    // const str = word[0].toUpperCase()
    // const main = word.slice(1, word.lenth)
    // const capital = str + main
    // console.log(capital);
    // return capital

    //short the Upper method
    if(!word) return word
    const capitalWord = word[0].toLocaleUpperCase()+ word.slice(1, word.length)
    return capitalWord

}


//toCamelCase
function toCamelCase(string) {
    const loLowerCase = string.toLowerCase()
    // console.log(loLowerCase);
    const SplitTheString = loLowerCase.split(" ")
    // console.log(SplitTheString);

    const finalArray = SplitTheString.map((word, i) => {
        // console.log(word, i);
        if (i === 0) return word
        return capitalizeString(word)

    })
    return finalArray.join('')
}

//topascalCase
function topascalCase(string) {
    const loLowerCase = string.toLowerCase()
    // console.log(loLowerCase);
    const SplitTheString = loLowerCase.split(" ")
    // console.log(SplitTheString);

    const finalArray = SplitTheString.map((word, i) => {
        // console.log(word, i);

        return capitalizeString(word)

    })
    return finalArray.join('')
}

//toSnakeCase
function toSnakeCase(string) {
    //This is normal method
    // return string.replaceAll(' ', '_')

     //this is reguler exapression Method 
    return string
    .replace(/\s+/g, '_')     // Replace spaces with underscores
    .replace(/-+/g, '_')      // Replace hyphens with underscores
    .replace(/_+/g, '_')      // Replace multiple underscores with a single underscore
    .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`) // Convert camelCase to snake_case
    .replace(/^_/, '');       // Remove any leading underscore
}


//tokabalCase
function toKabalCase(string) {
    //This is normal method
    // return string.replaceAll(' ', '-')

    //this is reguler exapression Method 
     return string
    .replace(/\s+/g, '-')         // Replace spaces with hyphens
    .replace(/_+/g, '-')          // Replace underscores with hyphens
    .replace(/-+/g, '-')          // Replace multiple hyphens with a single hyphen
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphen between lowercase and uppercase letters
    .toLowerCase();               // Convert the entire string to lowercase
}


//totrimCase
function toTrimCase(string) {
    //This is normal method
    return string.replaceAll(' ', '')

}

//Input value Update
input.addEventListener('input', (e) => {
    const news = e.target.value
    // console.log(news);
    updatAllSting()
})

function updatAllSting() {
    lowerCaseOutput.innerText = input.value.trim().toLowerCase()
    upperCaseOutput.innerText = input.value.trim().toLocaleUpperCase()
    camelCaseOutput.innerText = toCamelCase(input.value.trim())
    pascalCaseOutput.innerText = topascalCase(input.value.trim())
    snakeCaseOutput.innerHTML = toSnakeCase(input.value.trim())
    kebabCaseOutput.innerHTML = toKabalCase(input.value.trim())
    trimCaseOutput.innerHTML = toTrimCase(input.value.trim())
    
}

updatAllSting()