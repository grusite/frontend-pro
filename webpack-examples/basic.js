import suma from './test'
import render from './render'

console.log('Hello world!!')

const template = () => `
  <div class="example"> Lorem ipsom dolor</div>
`

render(template(), document.body)
