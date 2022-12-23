console.log("swag");

//Radio Button Check
/*
const btn = document.querySelector('.btn');
const radioButtons = document.querySelectorAll('input[name="geschlecht"]');
btn.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            removeValue(radioButton.value);
            selectedSize = radioButton.value;
            addValue(radioButton.value);
            break;
        }
    }
    // show the output:
    output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
});
*/
/*
function Check(Eingabe) {
    var richtigeZeichen ="0123456789[]()-+*%/";
    for (var i = 0; i < Eingabe.length; i++)
        if (richtigeZeichen.indexOf(Eingabe.charAt(i))<0 ) return false;
    return true;
}

function Ergebnis() {
    var x = 0;
    if (Check(window.document.kamelRechner.Display.value))
        x = eval(window.document.kamelRechner.Display.value);
    window.document.kamelRechner.Display.value = x;
    console.log("ergebnis");
}

function addValueMan(ZeichenMan) {
    window.document.kamelRechner.Display.value =
        window.document.kamelRechner.Display.value + ZeichenMan;
        document.getElementById("wi").addEventListener("click", removeValueMan);
    document.getElementById("ma").disabled = true;
    document.getElementById("wi").disabled = false;

}

function addValueWoman(ZeichenWoman) {
    window.document.kamelRechner.Display.value =
        window.document.kamelRechner.Display.value + ZeichenWoman;
    document.getElementById("ma").addEventListener("click", removeValueWoman);
    document.getElementById("ma").disabled = false;
    document.getElementById("wi").disabled = true;

}

function addValueAlter1(ZeichenAlter1) {
    window.document.kamelRechner.Display.value =
        window.document.kamelRechner.Display.value += ZeichenAlter1;
    document.getElementById("alter2").addEventListener("click", removeValueAlter1);
    document.getElementById("alter3").addEventListener("click", removeValueAlter1);
    document.getElementById("alter4").addEventListener("click", removeValueAlter1);
    document.getElementById("alter5").addEventListener("click", removeValueAlter1);
    document.getElementById("alter6").addEventListener("click", removeValueAlter1);
    document.getElementById("alter1").disabled = true;
}

function addValueAlter2(ZeichenAlter2) {
    window.document.kamelRechner.Display.value =
        window.document.kamelRechner.Display.value + ZeichenAlter2;
    document.getElementById("alter2").disabled = true;
}

function removeValueMan() {
    window.document.kamelRechner.Display.value =
    window.document.kamelRechner.Display.value - 500;

    console.log("remove man -5")
}

function removeValueWoman() {
    window.document.kamelRechner.Display.value =
    window.document.kamelRechner.Display.value - 100;

    console.log("remove woman -10")
}


function removeValueAlter1() {
    window.document.kamelRechner.Display.value =
        window.document.kamelRechner.Display.value - 5;

    console.log("remove woman -10")
}

function removeValueAlter2() {
    window.document.kamelRechner.Display.value =
        window.document.kamelRechner.Display.value - 100;

    console.log("remove woman -10")
}

*/

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
    output.innerText = summe  ? `You selected ${summe}` : `You haven't selected any size`;
    console.log(selectedAge, selectedGender, selectedHeight, selectedHair, selectedEye, selectedhairLenght, selectedBody);
    anzeige.innerText = summe  ? `You selected ${summe}` : `You haven't selected any size`;


});





// https://joergs-forum.de/in-javascript-addieren-statt-zusammenfuegen-t-2109-1