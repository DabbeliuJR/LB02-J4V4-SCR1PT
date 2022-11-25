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
    console.log("swaglvl2");
}

function addValueMan(ZeichenMan) {
    window.document.kamelRechner.Display.value =
        window.document.kamelRechner.Display.value + ZeichenMan;
        document.getElementById("wi").addEventListener("click", removeValueMan);

}

function addValueWoman(ZeichenWoman) {
    window.document.kamelRechner.Display.value =
        window.document.kamelRechner.Display.value + ZeichenWoman;
    document.getElementById("ma").addEventListener("click", removeValueWoman);

}

function removeValueMan(Zeichen) {
    window.document.kamelRechner.Display.value =
    window.document.kamelRechner.Display.value - 500;

    console.log("remove man -5")
}

function removeValueWoman(Zeichen) {
    window.document.kamelRechner.Display.value =
    window.document.kamelRechner.Display.value - 100;

    console.log("remove woman -10")
}

