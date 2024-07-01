const display = document.getElementById('display');

function calculate() {
    console.log(display.value);
    let answer = eval(display.value);
    console.log(answer);
    display.value = answer;
}