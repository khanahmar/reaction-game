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
    processingTime();
    check3 = true;
  }
  if ((check3 = true)) {
    !processingTime();
  }
  if (check2 === true && div === e.target) {
    h1.innerHTML = `Your reation time is :${
      new Date(Date.now() - firstTime).getTime() / 1000
    } seconds`;
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
  check2 = true;
}

// Getting the reaction time
function timeStart() {
  return (firstDate = Date.now());
}

// Function Processing time
function processingTime() {
  setTimeout(classClick, Math.floor(Math.random() * 4 + 1) * 1000);
}
