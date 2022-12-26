import './style.css'
// import javascriptLogo from './javascript.svg'
import {Counter} from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    
      <img class="imgclass"src="https://imgs.search.brave.com/M_Pp268Ed1rRm-1hAkaFIbVWxsTjIHH0rS_TNrR74rI/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDE5MTEwMS9vdXJs/YXJnZS9wbmd0cmVl/LWNhcnRvb24tY29s/b3Itc2ltcGxlLW1h/bGUtYXZhdGFyLXBu/Zy1pbWFnZV8xOTM0/NDU5LmpwZw" />
   
    <h1 class="counterHeader">counter</h1>
   
    <p class="read-the-docs">
      Click any button 
    </p>
    <div class="buttonDiv">
    <button id="hellobtn"><span>+</span></button>
    <button id="negative"><span>-</span></button>
    </div>
   
  </div>
`
// hello(document.querySelector('#hellobtn'),document.querySelector('#negative'),document.querySelector('.counterHeader'))

// document.querySelector('#hellobtn').addEventListener('click',hello)
// setupCounter(document.querySelector('#counter'))
const counter1 = new Counter(document.querySelector('#hellobtn'),document.querySelector('#negative'),document.querySelector('.counterHeader'));
