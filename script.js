import theRavenPoe from './theRavenPoe.js'

const MAX_PAGE = theRavenPoe.length
let currentPage = 1

// DOM Elements
const container = document.getElementById('container')
const textContent = document.getElementById('text-content')
const pageNumber = document.getElementById('page-count')

// Buttons
const nextPageButton = document.createElement('button')
const previousPageButton = document.createElement('button')

// Button Setup
nextPageButton.classList.add('button')
previousPageButton.classList.add('button', 'previous-btn')

nextPageButton.setAttribute('aria-label', 'Next Page')
previousPageButton.setAttribute('aria-label', 'Previous Page')

nextPageButton.textContent = 'Next Page'
previousPageButton.textContent = 'Previous Page'

// Event Listeners
nextPageButton.addEventListener('click', () => changePage(1))
previousPageButton.addEventListener('click', () => changePage(-1))

// Initial Page Render
document.addEventListener('DOMContentLoaded', () => {
  container.appendChild(previousPageButton)
  container.appendChild(nextPageButton)
  renderPage(currentPage)
})

// Change page logic
function changePage(delta) {
  const newPage = currentPage + delta
  if (newPage >= 1 && newPage <= MAX_PAGE) {
    currentPage = newPage
    renderPage(currentPage)
  }
}

// Render current page
function renderPage(page) {
  textContent.innerHTML = theRavenPoe[page - 1]
  pageNumber.textContent = `${page}/${MAX_PAGE}`

  // Handle previous button
  previousPageButton.style.display = (page === 1) ? 'none' : 'inline-block'

  // Handle next button
  if (page === MAX_PAGE) {
    nextPageButton.style.display = 'none'
  } else {
    nextPageButton.style.display = 'inline-block'
    nextPageButton.textContent = (page === MAX_PAGE - 1) ? 'Last Page' : 'Next Page'
  }
}
