const passGeneration = document.getElementById('password'); // textarea for password Generation
const slider = document.getElementById('range'); // slider range 
const output = document.getElementById('sliderValue'); // slider label
const checkChar = document.getElementById('checkChar');
const checkNumbers = document.getElementById('checkNumbers');
const checkSpe = document.getElementById('checkSpe');
const refresh = document.getElementById('refreshBtn');
const checkBoxs = document.getElementsByClassName('checkBox') // created to contain an HtmlCollection of all checkboxes

const card = document.getElementById('card')
const password = document.getElementById('password')
const passControls = document.getElementById('passwordControls')

let lower = "abcdefghijklmnopqrstuvwxyz".split();
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
let numeric = "1234567890".split();
let special = "!@#$%^&*()_-[]{}\|;:',./?+=".split()


output.textContent = slider.value // sets default value'

function changeBackground(){
if( slider.value < 7 ) {
    card.style.backgroundColor = "rgb(226, 28, 28)";
    password.style.backgroundColor = "rgb(226, 28, 28)";
    passControls.style.backgroundColor = "rgb(226, 28, 28)";
    passControls.style.border = "2px solid #cf1b1b"
    card.style.border = "4px solid #cf1b1b";
} else if ( slider.value < 9 && slider.value >= 7 ){
    card.style.backgroundColor = "#f0ad4e";
    password.style.backgroundColor = "#f0ad4e";
    passControls.style.backgroundColor = "#f0ad4e"
    passControls.style.border = "2px solid #D29B47"
    card.style.border = "4px solid #D29B47";
} else {
    card.style.backgroundColor = "#5cb85c";
    password.style.backgroundColor = "#5cb85c";
    passControls.style.backgroundColor = "#5cb85c";
    passControls.style.border = "2px solid #3DA13D"
    card.style.border = "4px solid #3DA13D";
}
}


// Updates the slider value and calls passwordGenerator function
slider.oninput = function() {
    output.textContent = this.value;
    changeBackground();
    passwordGenerator(); 
}
   
; 

// Test to determine how to determine wether or not a checkbox is checked
checkChar.oninput = function(){
    if(checkChar.checked){
        console.log("here")
    }
}


function passwordGenerator() {

    if(!checkChar.checked && !checkNumbers.checked && !checkSpe.checked) {
        alert("Please Select a Character Type for your Password")
    }

}


// Have to create an array from the htmlCollection and forEach item in there we create an addeventlistener
Array.from(checkBoxs).forEach((item) => {
    item.addEventListener('click', passwordGenerator)
})

refresh.addEventListener('click', passwordGenerator);

changeBackground();