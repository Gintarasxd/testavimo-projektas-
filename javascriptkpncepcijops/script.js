/*/*let Vardas = "Matas";
let amzius = "20";
let vedes = false

console.log(Vardas);
console.log(amzius);
console.log(vedes);
/*/


  /*let age = 20; // Change this value to test different ages
    let isCitizen = true; // Change this value to test different citizenship status
    let daysOfResidence = 40; // Change this value to test different days of residence
    // Step 2: Use if-else statements to determine voting eligibility
    if (amzius >=  18 isCitizen 15 daysOfResidence >= 25) {
        console.log("ar gali balsuoti pilietis .");
    } else if (vardas < 28) {
        console.log(" gali balsuoti nuo 18m ");
    } else if (pilietis) {
        console.log("tu gali balsuoti kaip[ pilietis].");
    } else if (dienu sali < 30) {
        console.log("ar tu negali balsuoti 30 dienu laikotarpije");
    }
        const age = 25;
        const bmi= 50;
        const smokes =true;

        let rizikoslygis;
        let patarimas;

        if (age < 30 && bmi <25 && !smokes) {
            rizikoslygis = "mazas";
            patarimas = (nieko nedarikyte puikiai jauciates);
            
        }  elese if (age) /*/
       
       
        
        
        
       /* document.addEventListener("DOMContentLoaded", function() {
            // Pasiekiame elementus naudodami DOM metodus
            let heading = document.getElementById("pavadinimas");
            let paragraph = document.getElementsByClassName("paragrafas")[0];
            let box = document.getElementById("dėžutė");
        
            // Pakeičiame elementų tekstą
            heading.textContent = "Naujas pavadinimas!";
            paragraph.textContent = "Tekstas buvo pakeistas.";
            box.textContent = "Aš dabar esu kitoks.";
        
            // Pakeičiame elementų stilių
            heading.style.color = "green";
            heading.style.fontSize = "40px";
        
            paragraph.style.color = "red";
            paragraph.style.fontStyle = "normal";
        
            box.style.backgroundColor = "blue";
            box.style.border = "20px solid black";
            box.style.padding = "100x";
        });*/
    
        

    /*  document.addEventListener("DOMContentLoaded", function() {
     
    let pirmasParagrafas = document.getElementById("pirmas");
    let antrasParagrafas = document.getElementById("antras");

    let naujasDiv = document.createElement("div");
    let naujasH1 = document.createElement("h1");

     
    naujasDiv.textContent = "Aš esu naujas <div> elementas!";
    naujasDiv.style.color = "pink";
    naujasDiv.style.fontSize = "20px";
    naujasDiv.style.border = "1px solid black";
    naujasDiv.style.padding = "10px";

    naujasH1.textContent = "Aš esu naujas <h1> elementas!";
    naujasH1.style.color = "red";
    naujasH1.style.fontSize = "36px";

    
    pirmasParagrafas.replaceWith(naujasDiv);

   
    antrasParagrafas.replaceWith(naujasH1);
});
*/



/*document.addEventListener("DOMContentLoaded", function() {
    // Kintamieji
    let button = document.getElementById("myButton");
    let textParagraph = document.getElementById("text");
    let parentDiv = document.getElementById("parentDiv");
    let childText = document.getElementById("childText");
    let box = document.getElementById("box");
    let statusParagraph = document.getElementById("status");

    // EventListener mygtukui
    button.addEventListener("click", function() {
        // Pakeičiame <p id="text"> tekstą
        textParagraph.innerText = "Tekstas pasikeitė!";

        // Sukuriame naują <span> elementą
        let newChild = document.createElement("span");
        newChild.id = "newChild";
        newChild.innerText = "Aš esu naujas vaikas (span)!";

        // Sukeičiame <p id="childText"> su nauju <span>
        parentDiv.replaceChild(newChild, childText);

        // Pakeičiame <div id="box"> spalvą į žalią
        box.style.backgroundColor = "green";

        // Patikriname, ar visi reikalavimai išpildyti
        if (textParagraph.innerText === "Tekstas pasikeitė!" &&
            newChild.parentNode === parentDiv &&
            box.style.backgroundColor === "green") {
            
            // Jei viskas pavyko, pakeičiame <p id="status"> tekstą ir spalvą
            statusParagraph.innerText = "Complete";
            statusParagraph.style.color = "green";
        } else {
            // Jei nepavyko, išspausdiname pranešimą į konsolę
            console.log("Nepavyko įvykdyti operacijos.");
        }
    });
});
*/

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  console.log(Numbers[i]);
}
