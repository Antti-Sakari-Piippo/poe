import theRavenPoe from './theRavenPoe.js'

let container = document.getElementById('container')
let textContent = document.getElementById('text-content')
let pageNumber = document.getElementById('page-count')

let nextPagebutton = document.createElement('button')
let previousPagebutton = document.createElement('button')

nextPagebutton.classList.add('button')
previousPagebutton.classList.add('button')
previousPagebutton.classList.add('previous-btn')

nextPagebutton.ariaLabel = 'Next Page'
previousPagebutton.ariaLabel = 'Previous Page'

container.appendChild(nextPagebutton)

window.onload = function () {
  nextPagebutton.innerHTML = 'Next Page'
  textContent.innerHTML = theRavenPoe[0]
}

let count = 1

const changePage = (x) => {
  count += x
  if (count > 6) {
    count = 6
  }
  if (count < 1) {
    count = 1
  }
  pageNumber.innerHTML = `${count}/6`
  textContent.innerHTML = theRavenPoe[count - 1]

  if (count > 1) {
    container.appendChild(previousPagebutton)
    previousPagebutton.innerHTML = 'Previous Page'
  } else {
    previousPagebutton.remove()
  }
  if (count === 6) {
    nextPagebutton.remove()
  } else {
    container.appendChild(nextPagebutton)
    nextPagebutton.innerHTML = 'Next Page'
    if (count === 5) {
      nextPagebutton.innerHTML = 'Last Page'
    }
  }
}

nextPagebutton.addEventListener('click', function () {
  changePage(1)
})
previousPagebutton.addEventListener('click', function () {
  changePage(-1)
})
