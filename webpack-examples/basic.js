import suma from './test'
import render from './render'
import 'console-dot-frog'

console.log('Hello world!!')

const template = () => `
  <div class="example"> Lorem ipsom dolor</div>
`

console.frog('Awesome!!!')
render(template(), document.body)
