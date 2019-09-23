// import suma from './test'
// import Cookie from 'js-cookie'
import moment from 'moment'
import render from './render'
import 'console-dot-frog'
import 'style.css'

console.log('Hello world!!')

const template = () => `
  <div class="example"> Lorem ipsom dolor
  ${moment().format('YYYY')}</div>
`

// Cookie.set('value', 123)

console.frog('Awesome!!!')
render(template(), document.body)
