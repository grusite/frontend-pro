import { toggle } from './ui'
import { renderShowsDOM } from './shows'
import storage from './storage'

const { setItem, getItem } = storage('cookieStorage')

const navbar = document.querySelector('#navbar')
const searchIcon = document.querySelector('#navbar-search')
const closeIcon = document.querySelector('#navbar-close')

const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#navbar .input.search')

searchInput.value = getItem('navbar-input')

const handleNavbar = toggle(navbar)

searchIcon.addEventListener('click', () => handleNavbar('no-search', 'search'))
closeIcon.addEventListener('click', () => handleNavbar('search', 'no-search'))

searchForm.addEventListener('submit', evt => {
  evt.preventDefault()
  if (searchInput.validity.valid) {
    //  Render Shows
    setItem('navbar-input', searchInput.value)
    renderShowsDOM(searchInput.value)
  }
})

// Puedo usar el bind o el arrow function, para que me coja el contexto de la routes que es donde lo importo
const hideFilter = handleNavbar.bind(this, 'filter', 'no-filter')
const showFilter = () => handleNavbar('no-filter', 'filter')

export { hideFilter, showFilter }
