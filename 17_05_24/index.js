


let input1;
let input2;

const getInputVal = () => {
  input1 = parseInt(document.querySelector("#ip1").value);
  input2 = parseInt(document.querySelector("#ip2").value);
  console.log(input1, input2);
};

document.querySelector("#add").addEventListener("click", () => {
  document.querySelector("h1").innerText = input1 + input2;
});

document.querySelector("#sub").addEventListener("click", () => {
  document.querySelector("h1").innerText = input1 -input2;
});
document.querySelector("#mul").addEventListener("click", () => {
  document.querySelector("h1").innerText = input1*input2;
});

document.querySelector("#div").addEventListener("click", () => {
  document.querySelector("h1").innerText = input1 / input2;
});