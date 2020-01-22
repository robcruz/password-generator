// const passwordElement = document.querySelector('#password')
// const generateButtonElement = document.querySelector('#generate')
// const copyButtonElement = document.querySelector('#copy')
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
const allCapsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const allLowCaseStr = "abcdefghijklmnopqrstuvwxyz"
const allNumbers = "0123456789"
let regex = /^[!"#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]{8,256}$/

// loadEventListeners()
//
// function loadEventListeners(){
//   generateButtonElement.addEventListener('click', updatePasswordElement)
//   copyButtonElement.addEventListener('click', copyToClipboard)
// }
//
// function updatePasswordElement(){
//   passwordElement.value = getPassword()
// }
//
// function copyToClipboard(){
//   passwordElement.select()
//   document.execCommand('copy')
// }

class PasswordGenerator {

}

function getRandCharSet(){
  switch(Math.floor(Math.random() * (4)) + 1){
    case 1:
      return specialCharacters
    case 2:
      return allCapsStr
    case 3:
      return allLowCaseStr
    case 4:
      return allNumbers
  }
}

function getRandNum(min=8, max=128){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandChar(str){
  return str.charAt(getRandNum(0, str.length))
}

function getPassword(){
  let password = ''
  while(!regex.test(password)){
    password += getRandChar(getRandCharSet())
  }

  return password
}




