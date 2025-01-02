let btn = document.querySelector("button");
let cred = document.querySelector(".red");
let block = document.querySelector(".block-top");
let cyellow = document.querySelector(".yellow");
let cgreen = document.querySelector(".green");

// btn.style.p = "absolute";
// cred.style.bottom = "6px";

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     cred.style.background = "red";
//   }, 1000);

//   setTimeout(() => {
//     cyellow.style.background = "yellow";
//     cred.style.background = "gray";
//   }, 2000);

//   setTimeout(() => {
//     cgreen.style.background = "green";
//     cyellow.style.background = "gray";
//   }, 3000);

//   setTimeout(() => {
//     cgreen.style.background = "gray";
//   }, 
// 4000);
// });
btn.addEventListener("click", ()=> {
  colorRed()
function colorRed() {
  cred.style.background = "red";
  cgreen.style.background = "gray";
  setTimeout(() => {
    colorYellow();
  },2000);
}
function colorYellow() {
  cyellow.style.background = "yellow";
  cred.style.background = "gray";
  setTimeout(() => {
    colorGreen()
  },2000);
}
function colorGreen() {
  cgreen.style.background = "green";
  cyellow.style.background = "gray";
  setTimeout(() => {
    colorRed()
  },2000);
}

})