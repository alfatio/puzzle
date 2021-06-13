// puzzle input : 108457 - 562041

const limitUpper = 562041,
      limitLower = 108457



function hasTwinAdjacent(arrStr = ""){

  for(let i = 0; i < arrStr.length - 1; i++){
    if(arrStr[i] === arrStr[i + 1]){
      return true
    }
  }

  return false
}

function checkRightHigh(arrStr = ""){

  for(let i = 0; i < arrStr.length - 1; i++){
    if(Number(arrStr[i]) > Number(arrStr[i + 1])){
      return false
    }
  }

  return true
}

function countPassword(limitLower,limitUpper){

  let countOutput = 0

  for(let i = limitLower; i < limitUpper; i++){
    let numberToCheck = i.toString()
    let hasTwin = hasTwinAdjacent(numberToCheck)
    if(hasTwin){
      let rightAlwaysHigher = checkRightHigh(numberToCheck)
      if(rightAlwaysHigher){
        countOutput++
      }
    }
  }

  return countOutput
}

console.log(countPassword(limitLower,limitUpper));