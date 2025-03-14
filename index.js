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
let numberOnScreen = "";
let realNumber = 0;
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    let pScreen = "";
    input.onclick = function writeOnScreen() {
        if (Number.isInteger(parseInt(input.value)) || input.value === ".") {
            numberOnScreen += input.value;
            pScreen = document.querySelector(".main-screen");
            pScreen.innerHTML = numberOnScreen;
            realNumber = parseFloat(numberOnScreen);

        } else if (input.value === "C") {
            numberOnScreen = "";
            realNumber = 0;
            pScreen = document.querySelector(".main-screen");
            pScreen.innerHTML = 0;
        }


    }
}
