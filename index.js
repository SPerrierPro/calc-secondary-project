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
let onScreen = "";
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.onclick = function writeOnScreen() {
        onScreen += input.value;
        console.log(onScreen);
        const pScreen = document.querySelector("p");
        pScreen.innerHTML = onScreen;
    }
}