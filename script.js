console.log("swag");

const btn = document.querySelector('#btn');

const radioButtonsGender = document.querySelectorAll('input[name="gender"]');
const radioButtonsAge = document.querySelectorAll('input[name="age"]');
const radioButtonsHeight = document.querySelectorAll('input[name="height"]');
const radioButtonsHair = document.querySelectorAll('input[name="hairColor"]');
const radioButtonsEye = document.querySelectorAll('input[name="eyes"]');
const radioButtonsHairLenght = document.querySelectorAll('input[name="hairLenght"]');
const radioButtonsBody = document.querySelectorAll('input[name="bodybuild"]');





btn.addEventListener("click", () => {
    let selectedGender;
    for (const radioButton of radioButtonsGender) {
        if (radioButton.checked) {
            selectedGender = radioButton.value;
            console.log("gender selection")
            break;
        }
    }
    /* Alter */
    let selectedAge;
    for (const radioButton of radioButtonsAge) {
        if (radioButton.checked) {
            selectedAge = radioButton.value;
            console.log("age selection")
            break;
        }
    }

    let selectedHeight;
    for (const radioButton of radioButtonsHeight) {
        if (radioButton.checked) {
            selectedHeight = radioButton.value;
            console.log("height selection")
            break;
        }
    }

    let selectedHair;
    for (const radioButton of radioButtonsHair) {
        if (radioButton.checked) {
            selectedHair = radioButton.value;
            console.log("hair selection")
            break;
        }
    }

    let selectedEye;
    for (const radioButton of radioButtonsEye) {
        if (radioButton.checked) {
            selectedEye = radioButton.value;
            console.log("Eye selection")
            break;
        }
    }

    let selectedhairLenght;
    for (const radioButton of radioButtonsHairLenght) {
        if (radioButton.checked) {
            selectedhairLenght = radioButton.value;
            console.log("Hair Lenght selection")
            break;
        }
    }

    let selectedBody;
    for (const radioButton of radioButtonsBody) {
        if (radioButton.checked) {
            selectedBody = radioButton.value;
            console.log("Hair Lenght selection")
            break;
        }
    }


    var summe = eval(Number(selectedAge) + Number(selectedGender) + Number(selectedHeight) + Number(selectedHair) + Number(selectedEye) + Number(selectedhairLenght) + Number(selectedBody));
    console.log(summe);
    // show the output:
    output.innerText = summe  ? `Sie sind ${summe} Kamele wert!` : `Du hast noch nicht alle Felder angewählt`;
    console.log(selectedAge, selectedGender, selectedHeight, selectedHair, selectedEye, selectedhairLenght, selectedBody);
    anzeige.innerText = summe  ? `Sie sind ${summe} Kamele wert!` : `Du hast noch nicht alle Felder angewählt`;


});