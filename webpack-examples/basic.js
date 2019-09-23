// import suma from './test'
import Cookie from 'js-cookie'
import render from './render'
import 'console-dot-frog'

console.log('Hello world!!')

const template = () => `
  <div class="example"> Lorem ipsom dolor</div>
`

Cookie.set('value', 123)

console.frog('Awesome!!!')
render(template(), document.body)
