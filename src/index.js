// 在Js中引入CSS
import "./x.css"
import './y.scss'
import './z.less'
import './a.styl'
import x from './x'
import png from './1.png'

console.log(png)
const div = document.getElementById('app')
div.innerHTML = `
    <img src=${png}> 
`
console.log('hi1')
console.log(x)