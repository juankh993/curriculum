// import './style.css'
// import javascriptLogo from '../javascript.svg'
// import viteLogo from '../public/img/vite.svg'
// import { setupCounter } from '../counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

const nav = document.querySelector(".buttons-container");


const open = document.getElementById("open-button");
const close = document.getElementById("close-button");
console.log("sss " + open);
open.addEventListener("click", function(){
    nav.classList.toggle("visible");
   
    open.style.display ="none"
});

close.addEventListener("click", function(){
    nav.classList.toggle("visible");
    if (open.style.display = "block" ) {
        open.style.display = "none" ;
    } else {
        open.style.display = "block" ;
    }
    open.style.display ="block"
});
