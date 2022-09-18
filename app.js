let passGeneration = document.getElementById('password'); // textarea for password Generation
let slider = document.getElementById('range'); // slider range 
let output = document.getElementById('sliderValue'); // slider label
let checkChar = document.getElementById('checkChar');
let checkNumbers = document.getElementById('checkNumbers');
let checkSpe = document.getElementById('checkSpe');
let refresh = document.getElementById('refreshBtn');
output.textContent = slider.value // sets default value
let checkBoxs = document.getElementsByClassName('checkBox') // created to contain an HtmlCollection of all checkboxes 
// Updates the slider value
slider.oninput = function() {
    output.textContent = this.value
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

slider.oninput( passwordGenerator )

checkChar.addEventListener('click', passwordGenerator)




// Have to create an array from the htmlCollection and forEach item in there we create an addeventlistener
Array.from(checkBoxs).forEach((item) => {
    item.addEventListener('click', passwordGenerator)
})


refresh.addEventListener('click', passwordGenerator);