function oneDice(){
    let diceInput = document.getElementById('dice-input')
    diceInput.value = 1
}

function decreaseDice(){
    let diceInput = document.getElementById('dice-input')
    if(+diceInput.value > 1){
        let newValue = +diceInput.value - 1
        diceInput.value = newValue
    }
    
}

function increaseDice(){
    let diceInput = document.getElementById('dice-input')
    let newValue = +diceInput.value + 1
    diceInput.value = newValue
}

function throwDice(){
    console.log(document.getElementById('dice-input').value)
}