const button1 = document.createElement('button');
const text1 = document.createElement('input');

button1.innerHTML = "Submit"
button1.addEventListener("click", clickDisplay)
button1.addEventListener("mouseover", changeColor)
button1.addEventListener("mouseout", revertColor)
text1.addEventListener("mouseover", changeColor)
text1.addEventListener("mouseout", revertColor)
text1.addEventListener("change", textchange);

document.body.appendChild(button1);
document.body.appendChild(text1)

function textchange() {
    text1.value = "You change something here..."
}



function clickDisplay() {
    alert("Hello World");
}

function changeColor() {
    button1.style.backgroundColor = "red";
    text1.style.backgroundColor = "blue";
}

function revertColor() {
    button1.style.backgroundColor = "lightgrey";
    text1.style.backgroundColor = "white";
}