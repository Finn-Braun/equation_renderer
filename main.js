//declare objects
const typed_math = document.getElementById("typed_math");
const rendered_math = document.getElementById("rendered_math");
const equation = document.getElementById("equation");
var toggle = 1;

//event listener
typed_math.addEventListener("input", update_value);
equation.addEventListener("click", screenshot_mode);

//convert to math
function update_value() {
  rendered_math.innerHTML = "`" + typed_math.textContent + "`";
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

//convert to screenshot colors
function screenshot_mode() {
  if (toggle > 0) {
    equation.style.background = "white";
    equation.style.color = "black";
    toggle = 0;
  } else {
    equation.style.background = "#111111";
    equation.style.color = "#df756a";
    toggle = 1;
  }
}
