let passGeneration = document.getElementById('password') // textarea for password Generation
let slider = document.getElementById('range') // slider range 
let output = document.getElementById('sliderValue') // slider label



output.textContent = slider.value // sets default value

// Updates the slider value
slider.oninput = function() {
    output.textContent = this.value
}
