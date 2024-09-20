// 1. Despot some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

//Start

//User Prompt
const prompt = require("prompt-sync")();

// variable  ofr spin and more
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,
};

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
};



//test


// 1. Despot some money
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Please Add the Amount: ")



        //check for Amount 
        if (isNaN(depositAmount)) {
            console.log("Please Add Amount")
        } else if (depositAmount < 11) {
            console.log("Please Add Amount More than 10");
        } else if (depositAmount > 100) {
            console.log("Please Add Amount Smaller Than 100");
        } else return depositAmount
    }
}

// 2. Determine number of lines to bet on
const getNumberOfLines = () => {
    while (true) {
        const depositAmount = prompt("Enter the number of line to bet on (1-3): ")

        //check for Numeber Of lines 
        if (isNaN(depositAmount)) {
            console.log("Please Add Amount")
        } else if (depositAmount <= 0) {
            console.log("Please Add Amount More than 0");
        } else if (depositAmount > 3) {
            console.log("Please Add Amount Smaller Than 3");
        } else return depositAmount
    }
}

// 3. Collect a bet amount
const getBetAmount = () => {
    while (true) {
        const bet = prompt("Enter the bet Amount: ")

        if (isNaN(bet) || bet < 10) {
            console.log("Bet Amoount should be more than 9");

        } else return bet
    }
}

// 4. Spin the slot machine

const spin = () => {
    const symbols = []

    for (const [element, value] of Object.entries(SYMBOLS_COUNT)) {
        // console.log(element, value);
        //1st method to push element inot array
        // symbols.push(...Array(value).fill(element))

        //2nd method to push element into array
        for (let i = 0; i < value; i++) {
            symbols.push(element)
        }
    }
    // console.log(symbols);

    //Nested Array for rows and col
    const reels = []
    for (let i = 0; i < COLS; i++) {
        reels.push([])
        const reelsSymbols = [...symbols]
        for (let j = 0; j < ROWS; j++) {

            const randomSymbols = Math.floor(Math.random() * reelsSymbols.length)
            // console.log(randomSymbols);

            const selectedSymbols = reelsSymbols[randomSymbols]
            reels[i].push(selectedSymbols)
            reelsSymbols.splice(randomSymbols, 1)
        }
    }
    return reels
}

// 5. check if the user won
const tranpose = (reels) => {

    const rows = []
    for (let i = 0; i < ROWS; i++) {
        rows.push([])

        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i])
        }
    }

    return rows
}

//Adding pip ( | ) on rows
const printrows = (rows) => {
    for (const row of rows) {
        // console.log(row);
        let rowString = ""
        for (const [i, symbol] of row.entries()) {
            rowString += symbol
            if (i != row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
}

// 6. give the user their winnings
const getWinings = (rows, BetAmount, numberOflines) => {
    let winning = 0

    for (let row = 0; row < numberOflines; row++) {
        const symbols = rows[row]
        let allSame = true

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false
                break
            }
        }

        if (allSame) {
            winning = parseInt(BetAmount) + parseInt(BetAmount)
        }
    }

    return winning
}


// 7. play again
const game = () => {
    let depositAmount = deposit()

    while (true) {
        
        const numberOflines = getNumberOfLines()
        const BetAmount = getBetAmount()

        //for  changes in deposit amount 
        depositAmount = depositAmount - BetAmount
        
        const reels = spin()
        // console.log(reels);

        const rows = tranpose(reels)
        // console.log(rows);

        printrows(rows)

        const wininngsAmount = getWinings(rows, BetAmount, numberOflines)
        // Amount = depositAmount + BetAmount
        depositAmountUpdated = parseInt(wininngsAmount) + parseInt(depositAmount) + parseInt(BetAmount)
        // console.log(" You won $" + wininngsAmount.toString());
        console.log(`you won ${wininngsAmount}`);
        // console.log(typeof wininngsAmount);
        

        if (depositAmount === 0) {
            console.log("You Ran out of the Money ");

            const newgame = prompt("Do you want to Play Again (y/n)? ")
            if (newgame == "y") {
                game()
            }else break
        }

        const PlayAgain = prompt("Do you want to play again (y/n)? ")
        if (PlayAgain != "y") {
                break
        }
        
        if (wininngsAmount == 0 ) {
            console.log(`your Balcnce is ${depositAmount }`);
        } else {
            console.log(`your balacne is  ${depositAmountUpdated}`);
            
        }
    
    }
}
    game()
