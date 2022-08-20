function getInputFieldValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function getTextElementValueById(elementId) {
    const elementText = document.getElementById(elementId);
    const elementTotalString = elementText.innerText;
    const elementTotal = parseInt(elementTotalString);
    return elementTotal;
}

function setTextElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}