// import suma from './test'
// import Cookie from 'js-cookie'
// import moment from 'moment'
import render from './render'
import 'console-dot-frog'
import footerStyle from './footer.css'
import style from './styles.css'
import './scss/content.scss'

const template = () => `
  <div class="${style.container}"> Lorem ipsom dolor</div>
`

// Cookie.set('value', 123)

const footer = `
  <footer> This is a footer </footer>
`

console.frog('Awesome!!!')
// render(template(), document.body)
render(`${template()} ${footer}`, document.body)
