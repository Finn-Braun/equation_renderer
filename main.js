
const input = document.querySelector("input");
const typed_math = document.getElementById("typed_math");
const math = document.getElementById("rendered_math");

input.addEventListener("change", updateValue);

function updateValue() {
  math.innerHTML = "`" + typed_math.value + "`";
  
  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.getElementById("title").onmouseover = event => {  
  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

