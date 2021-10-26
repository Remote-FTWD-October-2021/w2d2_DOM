

//Buscar elementos por ID
const title = document.getElementById('title')

//Para conseguir el texto interno de cualquier elemento
// title.innerText = 'HOLAAAAAAAA'
const titleText = title.innerText


// console.log(titleText)

//Para aplicar estilos a través del DOM
title.style.color = "red";
title.style.fontSize = "40px";

//Targetear todos los elementos con una determinada clase
const squares = document.getElementsByClassName('square');

const getRandomNumber = ()=>{ //Devuelve un numero entre 0 y 255
  return Math.floor(Math.random() * 256)
}

function printColors(){
  for(let i = 0; i < squares.length; i++){
    const r = getRandomNumber()
    const g = getRandomNumber()
    const b = getRandomNumber()
  
    squares[i].style.backgroundColor = `rgb(${r},${g},${b})`
  }
}

printColors()


//Para conseguir todos los elementos con un tag name especifico

const allDivs = document.getElementsByTagName('div')

// console.log(allDivs)

//Para buscar elementos dentro de otros elementos (se ponen en orden de padres a hijos)
const otherQuery = document.querySelector('#my-div #title')

// console.log(otherQuery)

//Para buscar todos los elementos de una clase, id o tag especifico
const querySelector = document.querySelectorAll('.square, .flexbox')

// console.log(querySelector)

//Para acceder a las clases de un elemento especifico
const myTitle = document.getElementById('title')

//Para conseguir todas las clases de un elemento
myTitle.className

//Para añadir una nueva clase a un elemento
myTitle.classList.add('JAIME')


const colorsButton = document.getElementById('colors-button')

colorsButton.onclick = ()=>{
  printColors()
}

const modeButton = document.getElementById('theme-button')
const bodyContainer = document.getElementById('body-container')

modeButton.onclick = ()=>{
  if(bodyContainer.className === 'light'){
    bodyContainer.classList.remove('light')
    bodyContainer.classList.add('dark')
  } else if(bodyContainer.className === 'dark'){
    bodyContainer.classList.remove('dark')
    bodyContainer.classList.add('light')
  }
}

const languageButton = document.getElementById('language-button')
const myH1 = document.getElementById('title')

let language = 'español'

languageButton.onclick = ()=>{
  if(language === 'español'){
    myH1.innerText = "Hello Ironhack 🛬🛬🛬"
    language = 'english'
    languageButton.innerText = '🇪🇸'
  } else if(language === 'english'){
    myH1.innerText = "Hola Ironhack 🛬🛬🛬"
    language = 'español'
    languageButton.innerText = '🇺🇸'
  }
}

const loginButton = document.getElementById('log-in')

// loginButton.onclick = ()=>{
//   const user = document.getElementById('user').value
//   const password = document.getElementById('password').value

//   console.log(user)
//   console.log(password)
// }

const addNameButton = document.getElementById('add-name-button')

addNameButton.addEventListener('click', ()=>{
  const name = document.getElementById('name').value
  const lastName = document.getElementById('lastName').value

  const li = document.createElement('li')
  li.innerText = name + ' ' + lastName
  const myList = document.getElementById('list-of-names')
  myList.appendChild(li)
})

// addNameButton.onclick = ()=>{
//   console.log('CLICK!!!!')
// }



//Detectar la hora para poner por defecto uno u otro

