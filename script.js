let input = document.querySelector('input') 

input.addEventListener('keypress', () => {
  let inputLength = input.value.length

  if(inputLength === 4){
    input.value += ' '
  }

  if(inputLength === 9){
    input.value += ' '
  }

  if(inputLength === 14){
    input.value += ' '
  }

})