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

// validation function
/* function validationCheck(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.value;

    if (isNaN(elementValue)) {
        alert('Please input a number');
        return;
    } else if (elementValue < 0) {
        alert('Please input a positive number');
        return;
    } else if (elementValue === '') {
        alert('You must have to provide a number');
        return;
    }
} */

/* function isError(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.value;

    if (elementValue < 0) {
        alert('error!!!');
        return;
    }
} */