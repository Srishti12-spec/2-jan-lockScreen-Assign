const password = "1234";

function inputNum(num) {
    var inputBox = document.getElementById("input-box");
    inputBox.value += num;
    console.log(inputBox.value);
}

function backspace() {
    var inputBox = document.getElementById("input-box");
    var inputValue = inputBox.value;
    inputBox.value = inputBox.value.substring(0, inputValue.length - 1);
    inputBox.classList.remove("txt-error");
    console.log(inputBox.value);
}

function checkPin() {
    var inputBox = document.getElementById("input-box");
    if (password === inputBox.value) {
        inputBox.value = "";
        inputBox.classList.remove("txt-error");
        document.getElementById("result").innerText = "Pin Accepted";
    } else {
        inputBox.classList.add("txt-error");
        document.getElementById("result").innerText = "Incorrect Pin";
    }
}