let cards = {
    ancients: [
        {
            title: 'Азатот',
            img: ''
        },
        {
            title: 'Йог-Сотот',
            img: ''
        },
        {
            title: 'Ктулху',
            img: ''
        },
        {
            title: 'Шуб-Ниггурат',
            img: ''
        }
    ],
    investigators: [],
    clues: [{title: 'Аркхэм'},{title: 'Токио'},{title: 'Рим'},{title: 'Лондон'},{title: 'Стамбул'},{title: 'Буэнос-Айрес'},
    {title: 'Сан-Франциско'},{title: 'Антарктида'},{title: 'Тунгуска'},{title: 'Пирамиды'},{title: 'Гималаи'},
    {title: 'Сердце Африки'},{title: 'Сидней'},{title: 'Амазонка'},{title: 'Шанхай'},
    {title: '1'},{title: '2'},{title: '3'},{title: '4'},{title: '5'},{title: '6'},{title: '7'},{title: '8'},{title: '9'},
    {title: '10'},{title: '11'},{title: '12'},{title: '13'},{title: '14'},{title: '15'},{title: '16'},{title: '17'},
    {title: '18'},{title: '19'},{title: '20'},{title: '21'}],
}

let gameData = copyObject(cards)

console.log('main.js')

let modal = new bootstrap.Modal(document.getElementById('modal'), {})
// modal.show()

function copyObject(obj){
    let result = {}
    for(let i in obj){
        result[i] = [...obj[i]]
    }
    return result
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomCard(param){

    if(!gameData[param].length){
        console.log(cards[param])
        gameData = copyObject(cards)
    }
    let randomInt = Math.floor(Math.random()*gameData[param].length)
    // console.log(randomInt, gameData[param])
    let randomItem = gameData[param].splice(randomInt, 1)[0]
    // let randomItem = gameData[param][Math.floor(Math.random()*gameData[param].length)]

    let modalTitle = document.getElementById('modal-title')
    let modalImg = document.getElementById('modal-img')
    let modalRepeat = document.getElementById('modal-btn-repeat')

    modalRepeat.onclick = function(){ getRandomCard(param) }
    if(randomItem && randomItem.title){
        modalTitle.innerText = randomItem.title
        if(randomItem.img) modalImg.src = `{randomItem.img}.jpg`
        modal.show()
    }else{
        modalTitle.innerText = 'Ошибка! Файл не найден.'
        modal.show()
    }
    
}

/**dice */
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
