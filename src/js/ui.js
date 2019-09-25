const loader = document.querySelector('#loader')
const detailSection = document.querySelector('#detailSection')

const toggle = element => (removeClass, addClass) => {
  element.classList.remove(removeClass)
  element.classList.add(addClass)
}

const toggleClass = (element, toggleClass) => {
  element.classList.toggle(toggleClass)
}

const renderLoader = toggle(loader)

// const handleCommentForm = display => (detailSection.style.display = display)
const hideCommentForm = () => (detailSection.style.display = 'none')
const showCommentForm = () => (detailSection.style.display = 'block')

export { toggle, toggleClass, renderLoader, hideCommentForm, showCommentForm }
