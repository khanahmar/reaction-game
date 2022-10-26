// on first click it should start
// it should process
// it should show the click
// use should click

const div = document.getElementById("div");
const h1 = document.getElementById("h1");
let firstTime;
let check = false;
let check2 = false;

div.addEventListener("click", (e) => {
  if (div === e.target) {
    classProcess();
  }
  if (check === true) {
    setTimeout(classClick, 3000);
  }
  if (check2 === true && div === e.target) {
    console.log(firstTime);
    h1.innerHTML = Date.now()-firstTime;
  }
});

function classProcess() {
  div.classList.add("process");
  div.innerHTML = "in process....";
  check = true;
}

function classClick() {
  div.classList.add("click");
  div.innerHTML = "Now click";
  firstTime = timeStart();
  console.log(firstTime);
  check2 = true;
}

function timeStart() {
  return (firstDate = Date.now());
}
