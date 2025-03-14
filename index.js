/*const onScreen = "";
function writeOnScreen(e) {
    console.log(e);
    const input = document.getElementsByTagName("button");
    console.log(input);
    if (input !== "=") {
        onScreen += input;

    }
}
*/

const inputs = document.getElementsByTagName("button");
let numberOnMainScreen = "";
let numberOnSecondScreen = "";
let realNumber = 0;
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    let mainScreenDisplay = "";
    let secondaryScreenDisplay = "";
    input.onclick = function writeOnScreen() {
        if (Number.isInteger(parseInt(input.value)) || input.value === ".") {
            numberOnMainScreen += input.value;
            mainScreenDisplay = document.querySelector(".main-screen");
            mainScreenDisplay.innerHTML = numberOnMainScreen;
            realNumber = parseFloat(numberOnMainScreen);
            //            console.log(realNumber);
        } else if (input.value === "C") {
            numberOnMainScreen = "";
            realNumber = 0;
            mainScreenDisplay = document.querySelector(".main-screen");
            mainScreenDisplay.innerHTML = 0;
        } else if (input.value === "/" || input.value === "*" || input.value === "+" || input.value === "-") {
            const operator = input.value;
            console.log(operator);
            numberOnSecondScreen = numberOnMainScreen;
            numberOnMainScreen = 0;
            secondaryScreenDisplay = document.querySelector(".secondary-screen");
            secondaryScreenDisplay.innerHTML = numberOnSecondScreen;
            mainScreenDisplay = document.querySelector(".main-screen");
            mainScreenDisplay.innerHTML = numberOnMainScreen;
            // faut encore enlever le 0 qui reste sur mon main screen quand un opéraeut est utilisé
        }


    }
}
