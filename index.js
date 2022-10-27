// Getting id's
const div = document.getElementById("div");
const h1 = document.getElementById("h1");

// Declearing variables
let firstTime;
let check = false;
let check2 = false;
let check3 = false;

// Creating an event listner
div.addEventListener("click", (e) => {
  if (div === e.target) {
    classProcess();
  }
  if (check === true) {
    setTimeout(classClick, 2000);
  }
  if (check2 === true && div === e.target) {
    h1.innerHTML = `Your reation time is :${Date.now() - firstTime}`;
  }
});

// Adding the class of click
function classProcess() {
  div.classList.add("process");
  div.innerHTML = "in process....";
  check = true;
}

// Adding the class of click
function classClick() {
  div.classList.add("click");
  div.innerHTML = "Now click";
  firstTime = timeStart();
  console.log(firstTime);
  check2 = true;
}

// Getting the reaction time
function timeStart() {
  return (firstDate = Date.now());
}

// Getting time in seconds
let newDateTime = Number(new Date(Date.now() - firstTime).getTime() / 1000);
console.log(newDateTime);
