let passGeneration = document.getElementById('password'); // textarea for password Generation
let slider = document.getElementById('range'); // slider range 
let output = document.getElementById('sliderValue'); // slider label
let checkChar = document.getElementById('checkChar');
let checkNumbers = document.getElementById('checkNumbers');
let checkSpe = document.getElementById('checkSpe');
let refresh = document.getElementById('refreshBtn');
let checkBoxs = document.getElementsByClassName('checkBox') // created to contain an HtmlCollection of all checkboxes 


output.textContent = slider.value // sets default value


// Updates the slider value and calls passwordGenerator function
slider.oninput = function() {
    output.textContent = this.value 
    passwordGenerator();
}; 

// Test to determine how to determine wether or not a checkbox is checked
checkChar.oninput = function(){
    if(checkChar.checked){
        console.log("here")
    }
}


function passwordGenerator() {


    console.log(slider.value, checkChar.checked, checkNumbers.checked, checkSpe.checked)

}



// Have to create an array from the htmlCollection and forEach item in there we create an addeventlistener
Array.from(checkBoxs).forEach((item) => {
    item.addEventListener('click', passwordGenerator)
})


refresh.addEventListener('click', passwordGenerator);