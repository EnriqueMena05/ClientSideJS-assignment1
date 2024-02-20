// Initializing the textSect variables to be used in an if statement later
let textSect1 = "";
let textSect2 = "";
let textSect3 = "";
let textSect4 = "";
let textSect5 = "";

// Initializing a variable to see the complete story
let seeCompleteStory = document.querySelector("#story");

// Initializing 5 arrays to be used for the randomizer
const sect1Text = ["You", "Dad", "Mom", "A dog", "A cat"];
const sect2Text = ["ate with", "swam with", "ran with", "had an appointment with", "saw"];
const sect3Text = ["a magical", "a phenomenal", "a cool", "a funny", "a weird looking"];
const sect4Text = ["bean", "giraffe", "otter", "celebrity", "police officer"];
const sect5Text = ["at the museum", "at school", "on the sidewalk", "at the airport", "pumping gas"];

// Initializing variables for the users custom input
let personInputJS = document.querySelector("#personInput");
let verbInputJS = document.querySelector("#verbInput");
let adjectiveInputJS = document.querySelector("#adjectiveInput");
let whatInputJS = document.querySelector("#whatInput");
let whereInputJS = document.querySelector("#whereInput");


// Adding an event listener to the randomize button
const generateRandomStory = document.querySelector("#randomStory");
generateRandomStory.addEventListener("click", getRandomText);

function getRandomText() {
    // how to get random number between 0 and 4 info found online here https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    // 5 number generators for 5 arrays
    let randomGenerator1 = Math.floor(Math.random() * (5));
    let randomGenerator2 = Math.floor(Math.random() * (5));
    let randomGenerator3 = Math.floor(Math.random() * (5));
    let randomGenerator4 = Math.floor(Math.random() * (5));
    let randomGenerator5 = Math.floor(Math.random() * (5));

    // Writing a sentence based on the random number given
    seeCompleteStory.textContent = `${sect1Text[randomGenerator1]} ${sect2Text[randomGenerator2]} ${sect3Text[randomGenerator3]} ${sect4Text[randomGenerator4]} ${sect5Text[randomGenerator5]}`
}

// Fetching and inputing the clicks into a variable
function buttonAddClickToSection(section) {
    const sect = document.querySelectorAll(section);

    // looping through the button list and adding an event listener to them
    for (var i = 0; i < sect.length; i++) {
        sect[i].addEventListener("click", saveWords);
    }
}

buttonAddClickToSection(".sect1");
buttonAddClickToSection(".sect2");
buttonAddClickToSection(".sect3");
buttonAddClickToSection(".sect4");
buttonAddClickToSection(".sect5");

// if the class list contains any of the sections respectively then it will input the value of the respective button into textSectX
function saveWords(event) {
    if (event.target.classList.contains("sect1")) {
        textSect1 = event.target.value;
    } else if (event.target.classList.contains("sect2")) {
        textSect2 = event.target.value;
    } else if (event.target.classList.contains("sect3")) {
        textSect3 = event.target.value;
    } else if (event.target.classList.contains("sect4")) {
        textSect4 = event.target.value;
    } else if (event.target.classList.contains("sect5")) {
        textSect5 = event.target.value;
    }
}

// initializing the submit button and naming it btnSeeStory
const btnSeeStory = document.querySelector("#seeStory");
btnSeeStory.addEventListener("click", seeStory);

// initializing the reset button and naming it reset
const reset = document.querySelector("#clear");
reset.addEventListener("click", clearSect);

// the reset button will clear the inputs
function clearSect() {
    textSect1 = "";
    textSect2 = "";
    textSect3 = "";
    textSect4 = "";
    textSect5 = "";
    personInputJS.value = "";
    verbInputJS.value = "";
    adjectiveInputJS.value = "";
    whatInputJS.value = "";
    whereInputJS.value = "";
    seeCompleteStory.textContent = "";
}

// will make sure that the user input a  value for each section before submitting
// will paste the complete story into the page
function seeStory() {
    // will check to see if the user input anything into the respective boxes
    // if the user did input something then it will overwrite whatever they clicked on and will replace it
    if (personInputJS.value !== "") {
        textSect1 = personInputJS.value;
    }
    if (verbInputJS.value !== "") {
        textSect2 = verbInputJS.value;
    }
    if (adjectiveInputJS.value !== "") {
        textSect3 = adjectiveInputJS.value;
    }
    if (whatInputJS.value !== "") {
        textSect4 = whatInputJS.value;
    }
    if (whereInputJS.value !== "") {
        textSect5 = whereInputJS.value;
    }
    if (textSect1 == "" || textSect2 == "" || textSect3 == "" || textSect4 == "" || textSect5 == "") {
        window.alert("Make sure to click on each section before submitting");
    } else {
        seeCompleteStory.textContent = `${textSect1} ${textSect2} ${textSect3} ${textSect4} ${textSect5}`
    }
}