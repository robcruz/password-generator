const passwordElement = document.querySelector('#password')
const generateButtonElement = document.querySelector('#generate')
const copyButtonElement = document.querySelector('#copy')

loadEventListeners()

function loadEventListeners(){
  generateButtonElement.addEventListener('click', updatePasswordElement)
}

function updatePasswordElement(){
  passwordElement.textContent = getPassword()
}

function getRandCharSet(){
  switch(Math.floor(Math.random() * (4)) + 1){
    case 1:
      return "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    case 2:
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    case 3:
      return "abcdefghijklmnopqrstuvwxyz"
    case 4:
      return "0123456789"
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
  let passwordLength = getRandNum()
  let password = ""
  while (password.length < passwordLength){
    password += getRandChar(getRandCharSet())
  }

  return password
}




