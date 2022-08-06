const message = document.querySelector('#message')

function addMovie(e){
    e.preventDefault()
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOfMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}

function deleteMovie(e){
    e.target.parentNode.remove()
    message.textContent =  `${e.target.parentNode.textContent} deleted!`
    revealMessage()
}

function crossOfMovie (e){
    e.target.classList.toggle('checked')
    if(e.target.classList.contains('checked')){
        message.textContent = `${e.target.textContent} watched!`
    } else {
        message.textContent = `${e.target.textContent} added back!`
    }
    revealMessage()
}

document.querySelector('form').addEventListener('submit', addMovie)

function revealMessage (){
    message.className = ''
    setTimeout(() => {
        message.className = 'hide'
    }, 1000)
}