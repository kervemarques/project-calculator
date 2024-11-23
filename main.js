const input = document.getElementById("resultado")

let numero1 = ''
let numero2 = ''
let operador = ''


function handleNumberClick(n){
  if (operador){
    numero2 = parseInt(`${numero2}${n}`) 
  }
  else {
    if(isNaN(numero1)){
      numero1 = ''
    }
    numero1 = parseInt(`${numero1}${n}`) 
  }
  updateDisplay(n)
}

/**
 funçao handleKeyDown faz a ligacao entre o teclado e os botoes da calculadora
 */
function handleKeyDown(event) { //event.key: "event" eh a acao 
  const operadores = ['+', '-', '*', '/']
  if (event.key === 'Backspace' || event.key === 'Delete') {
    handleClearClick()
  }
  else if (event.key >= 0 && event.key <= 9) {
    handleNumberClick(event.key)
  }
  else if (operadores.includes(event.key)) {
    handleOperatorClick(event.key)
  }
  else if (event.key === 'Enter') {
    handleResultClick()
  }
  
  console.log (event.key)
}

function calculate(){
  if(numero1 !== '' && numero2 !== '' && operador !== ''){
    if(operador === '+'){
      numero1 = parseInt(numero1) + parseInt(numero2)
    }
    else if(operador === '-'){
      numero1 = parseInt(numero1) - parseInt(numero2)
    }
    else if(operador === '*'){
      numero1 = parseInt(numero1) * parseInt(numero2)
    }
    else if(operador === '/'){
      if(!numero2){
        numero1 = 'Erro'
      }
      else{
        numero1 = parseInt(numero1) / parseInt(numero2)
      }
    }
    numero2 = ''
    operador = ''
  }
}

function handleOperatorClick(op){
  calculate()
  operador = op
  if(numero1 === '' || isNaN(numero1)){
    numero1 = '0'
  }

  updateDisplay()
}

function handleResultClick(){
  calculate()
  updateDisplay()
}

function handleClearClick(){
  numero1 = '0'
  numero2 = ''
  operador = ''
  updateDisplay()
}

function updateDisplay() {
  input.value = `${numero1} ${operador} ${numero2}`.trim();
}