
//declare objects
const typed_math = document.getElementById("typed_math");
const typed_math_box = document.getElementById("typed_math_box");
const rendered_math = document.getElementById("rendered_math");

//event listener
typed_math_box.addEventListener("input", update_value);

//convert to math
function update_value() {
  typed_math.innerHTML = typed_math_box.textContent;
  rendered_math.innerHTML = "`" + typed_math_box.textContent + "`";
  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}