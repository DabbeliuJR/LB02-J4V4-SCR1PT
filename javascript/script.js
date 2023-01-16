const btn = document.querySelector('#btn');
const radioButtonsGender = document.querySelectorAll('input[name="gender"]');
const radioButtonsAge = document.querySelectorAll('input[name="age"]');
const radioButtonsHeight = document.querySelectorAll('input[name="height"]');
const radioButtonsHair = document.querySelectorAll('input[name="hairColor"]');
const radioButtonsEye = document.querySelectorAll('input[name="eyes"]');
const radioButtonsHairLenght = document.querySelectorAll('input[name="hairLenght"]');
const radioButtonsBody = document.querySelectorAll('input[name="bodybuild"]');

const btn2 = document.querySelector('#btn2');



btn.addEventListener("click", () => {

    let selectedGender;
    for (const radioButton of radioButtonsGender) {
        if (radioButton.checked) {
            selectedGender = radioButton.value;
            console.log("gender selection")
            break;
        }
    }

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

    output.innerText = summe  ? `Sie sind ${summe} Kamele wert!` : `Du hast noch nicht alle Felder angewählt`;
    console.log(selectedAge, selectedGender, selectedHeight, selectedHair, selectedEye, selectedhairLenght, selectedBody);
    anzeige.innerText = summe  ? `Sie sind ${summe} Kamele wert!` : `Du hast noch nicht alle Felder angewählt`;

    if(summe > 0){
        var ergebnisse = [];
        localStorage.setItem(prompt("Name der berechneten Person"), JSON.stringify(summe));
    }



});

btn2.addEventListener("click", () => {
    let keys = Object.keys(localStorage);
    keys.forEach(function(key){
        console.log(key + " : " + localStorage.getItem(key));
    });
    let valueLS = Object.values(localStorage);
    valueLS.forEach(function(value){
        console.log(value + " : " + localStorage.getItem(value));
    });
    output2.innerText = keys  ? `${keys} \n  ${valueLS}` : `Du hast noch nicht alle Felder angewählt`;



});

btn3.addEventListener("click", () => {

    localStorage.clear()

});

