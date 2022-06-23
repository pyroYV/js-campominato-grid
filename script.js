// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio: Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.


const startGame = document.getElementById('start-game')
const mineWrapper = document.getElementById('minefield-wrapper')


startGame.addEventListener("click", function() {
    mineWrapper.innerHTML= ''
    let difficulty = difSelector()
    console.log(difficulty)
    for (let index = 1; index < difficulty; index++) {
        const square = createNewSquare(difficulty)
        eventToggle(square,'skyblue')
        
        mineWrapper.append(square)
        square.innerHTML = index
        square.addEventListener('click',function(){
        console.log(`La casella clickata è la numero: ${index}`);
        }
        )
        
    }
  })


function createNewSquare(difficulty) {
    const square = document.createElement('div')
    square.classList.add('square','border')
    if(difficulty == 101){
        square.classList.add('easy')
    } else if (difficulty == 82){
        square.classList.add('medium')
    } else{
        square.classList.add('hard')}
    return square
}

    
    
function eventToggle(element,toggle){
     element.addEventListener('click',function(){
        element.classList.toggle(toggle)
})}

function difSelector(){
    let difficultySelector = document.getElementById('dif-select')
    let difficulty = difficultySelector.value
    if(difficulty == 1){
        difficulty = 101
    } else if (difficulty == 2){
        difficulty = 82
    } else{
        difficulty = 50
    }
    return difficulty
}
