// puzzle input : 108457 - 562041

const limitUpper = 562041,
      limitLower = 108457


function hasTwinAdjacent(arrStr = ""){
  // check has twin adjacent number

  for(let i = 0; i < arrStr.length - 1; i++){
    if(arrStr[i] === arrStr[i + 1]){
      return true
    }
  }

  return false
}

function checkRightHigh(arrStr = ""){
  // check number to the right always higher

  for(let i = 0; i < arrStr.length - 1; i++){
    if(Number(arrStr[i]) > Number(arrStr[i + 1])){
      return false
    }
  }

  return true
}

function changeNumber(arrStr = ""){
  // to skip unnecessary number

  for(let i = 0; i < arrStr.length - 1; i++){
    if(Number(arrStr[i]) > Number(arrStr[i + 1])){

      let newStr = arrStr.split('')

      for(let j = i; j < newStr.length; j++){
        newStr[j] = newStr[i]
      }

      arrStr = newStr.join('')
      break
    }
  }
  return arrStr
}

function countPassword(limitLower,limitUpper){

  let countOutput = 0

  for(let i = limitLower; i < limitUpper; i++){

    let numberToCheck = i.toString()
    let rightAlwaysHigher = checkRightHigh(numberToCheck)
    
    if(rightAlwaysHigher){
      let hasTwin = hasTwinAdjacent(numberToCheck)

      if(hasTwin){
        countOutput++
      }
      
    }else{
      let newNumber = +changeNumber(numberToCheck)
      i = newNumber - 1
    }
  }

  return countOutput
}

console.log(countPassword(limitLower,limitUpper));