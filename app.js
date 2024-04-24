
var round_input = document.getElementById('round-input')
var round_result = document.getElementById('round-result')
var random_result = document.getElementById('random_result')
function round (){
    var roundResult = Math.round(round_input.value);
    round_result.innerText= "==>"+roundResult
}

function floor (){
    var roundResult = Math.floor(round_input.value);
    round_result.innerText= "==>"+roundResult
}

function generateRandomNumber(){
    var random= Math.random()
    var randomTo10= Math.ceil(random*2)
    random_result.innerText="Random"+random+"Multiply By 100=>"+randomTo100
}