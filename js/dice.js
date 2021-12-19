function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function oneDice(){
    let diceInput = document.getElementById('dice-input')
    diceInput.value = 1
    diceRender(diceInput.value)
}

function decreaseDice(){
    let diceInput = document.getElementById('dice-input')
    if(+diceInput.value > 1){
        let newValue = +diceInput.value - 1
        diceInput.value = newValue
    }
    diceRender(diceInput.value)
}

function increaseDice(){
    let diceInput = document.getElementById('dice-input')
    let newValue = +diceInput.value + 1
    diceInput.value = newValue
    diceRender(diceInput.value)
}

function throwDice(){
    console.log(document.getElementById('dice-input').value)
    let dices = document.querySelector('.dices').querySelectorAll('.dice-placeholder')
    let results = []
    dices.forEach(dice => {
        let randomInt = randomInteger(1, 6)
        results.push(randomInt)
        dice.innerHTML = `<i class="bi bi-dice-${randomInt}-fill" style="font-size: 32px"></i>`
    })
    diceStatistic(results)
}

function diceRender(number){
    let dices = document.querySelector('.dices')
    dices.innerHTML = ''
    for (let i = 0; i < number; i++) {
        dices.innerHTML += `<div class="dice-placeholder m-1"><div class="spinner-border text-light"></div></div>`
    }
}

function diceStatistic(array){
    let element = document.querySelectorAll(`.ststistic-data`)
    element.forEach(item => {
        item.innerHTML = 0
        item.classList.remove('text-white')
        item.classList.remove('bg-secondary')
    })
    
    for(let number of array){
        let element = document.querySelector(`.ststistic-data-${number}`)
        let content = +element.innerText
        element.innerText = content + 1
        element.classList.add('text-white')
        element.classList.add('bg-secondary')
    }
}

diceRender(1)