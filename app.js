const passGeneration = document.getElementById('password'); // textarea for password Generation
const slider = document.getElementById('range'); // slider range 
const output = document.getElementById('sliderValue'); // slider label
const checkChar = document.getElementById('checkChar');
const checkNumbers = document.getElementById('checkNumbers');
const checkSpe = document.getElementById('checkSpe');
const refresh = document.getElementById('refreshBtn');
const checkBoxs = document.getElementsByClassName('checkBox') // created to contain an HtmlCollection of all checkboxes
const copyPassBtn = document.getElementById('generate')
const container = document.getElementsByClassName('passwordcontainer')

// Section of dom elements for changing css
const card = document.getElementById('card') //
let password;
const passControls = document.getElementsByClassName('passwordControls')

// Section for character strings to determine password with
let lower = "abcdefghijklmnopqrstuvwxyz".split(); // 
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
let numeric = "1234567890".split();
let special = "!@#$%^&*()_-[]{}\|;:',./?+=".split()

// defines an empty string to place our selected character strings
let userChoices ="";

output.textContent = slider.value // sets default value'

// function to changes css styling based on slider position
function changeBackground(){
if( slider.value < 7 ) { // used to change css styling when slider value is under 7
    card.style.backgroundColor = "#E21C1C";
    // containter.style.backgroundColor = "#E21C1C";
    passControls[0].style.backgroundColor = "#E21C1C";
    passControls[0].style.border = "2px solid #cf1b1b";
    passControls[0].classList.remove('middle', 'end');
    passControls[0].classList.toggle('first')
    card.style.border = "4px solid #cf1b1b";
} else if ( slider.value < 9 && slider.value >= 7 ){ // used to change slider value when values are in between 7 & 9
    card.style.backgroundColor = "#f0ad4e";
    // containter.style.backgroundColor = "#f0ad4e";
    passControls[0].style.backgroundColor = "#f0ad4e";
    passControls[0].style.border = "2px solid #D29B47";
    passControls[0].classList.remove('first', 'end');
    passControls[0].classList.add('middle')
    card.style.border = "4px solid #D29B47";
} else if (slider.value > 9){ // used to change css styling when slider value is above 9
    card.style.backgroundColor = "#5cb85c";
    card.style.border = "4px solid #3DA13D";    
    // containter.style.backgroundColor = "#5cb85c";
    passControls[0].style.backgroundColor = "#5cb85c";
    passControls[0].style.border = "2px solid #3DA13D"
    passControls[0].classList.remove('first', 'middle');
    passControls[0].classList.add('end');

}
}


// Updates the slider value and calls writePassword function
slider.oninput = function() {
    
    output.textContent = this.value;
    changeBackground();
    writePassword(); 
};

// Places the password generated in passwordGenerator() into dom element to display password
function writePassword() {
    let childDivs = document.querySelectorAll(".passwordLetters")
    console.log(childDivs)
    for( let i = 0; i < childDivs.length; i++){
        childDivs[i].remove();
    }

    let output = passwordGenerator();
    let letter = new RegExp("[a-zA-Z]")
    let digit = new RegExp("[^0-9]")
    password = output;
    console.log(password)
    

    for( var i = 0; i <= output.length; i++){
        let newSpan = document.createElement('div')
        newSpan.textContent = output.charAt(i);
    
        if(letter.test(output.charAt(i))){
            newSpan.id = 'letters';
        } else if (digit.test(output.charAt(i))){
            newSpan.id = "digits";
        } else {
            newSpan.id = "specialChar";
        }
        
        newSpan.classList.add("passwordLetters")
        container[0].appendChild(newSpan)
    }
    
    console.log(container[0].children.length)
}

function copyClip() {
    console.log(password)
    navigator.clipboard.writeText(password) // connects to clipboard via navigator and writes new password to clipboard
}
   
function passwordGenerator() {
    let output = '';
    let numericChar = '';
    // function 
    let getRanChar = (str) => str.charAt(Math.floor(Math.random() * str.length));
    // requires users to include 
    if(!checkChar.checked && !checkNumbers.checked && !checkSpe.checked) {
        alert("Please Select a Character Type for your Password");
    }

    if(checkChar.checked){
        userChoices+= lower + upper;
        output += getRanChar(upper.toString());
        output += getRanChar(lower.toString())
        console.log(output)
    };
    if(checkNumbers.checked){
        userChoices+= numeric
        numericChar += getRanChar(numeric.toString())
        console.log(numericChar);
        output += numericChar; 
    };
    if(checkSpe.checked){
        userChoices+= special
        output += getRanChar(special.toString())
    }

    for(let i = output.length; i < slider.value; i++){
        output += userChoices.charAt(Math.floor(Math.random() * userChoices.length))
        


    };

    output = output.split('').sort(function(){return 0.5-Math.random()}).join('')
    return output

}

// Have to create an array from the htmlCollection and forEach item in there we create an addeventlistener
Array.from(checkBoxs).forEach((item) => {
    item.addEventListener('click', writePassword)
})

refresh.addEventListener('click', writePassword);

copyPassBtn.addEventListener('click', copyClip)

changeBackground();
writePassword();