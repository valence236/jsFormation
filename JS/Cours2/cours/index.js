//Selecteurs
//document.querySelector()
    //const baliseHTML = document.querySelector("h4");
    //console.log(baliseHTML);
// Click Event
const questionContainer = document.querySelector(".click_event");
const btn1= document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const response= document.querySelector('p');

questionContainer.addEventListener("click",()=>{
    questionContainer.classList.toggle("question_clicked");
});

btn1.addEventListener("click",()=>{
    response.classList.add("showResponse");
    response.style.background= "red";
});

btn2.addEventListener("click",()=>{
    response.classList.add("showResponse");
    response.style.background= "green";
});

const mouseMove = document.querySelector(".mousemove");

window.addEventListener("mousemove",(e)=>{
    mouseMove.style.left = e.pageX + "px";
    mouseMove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", ()=>{
    mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", ()=>{
    mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
    mouseMove.style.border= "2px solid blue";
});

questionContainer.addEventListener("mouseenter", ()=>{
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", ()=>{
    questionContainer.style.background = "green";
});

response.addEventListener("mouseover", ()=> {
    response.style.transform="rotate(2deg)";
});

//--------------------------------------------------------------------------------

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const ring = (key)=> {
    const audio = new Audio();
    audio.src= key +".mp3";
    audio.play();
};

document.addEventListener('keypress', (e)=>{
    key.textContent= e.key;

    if (e.key === 'a') {
        keypressContainer.style.background="blue";
    } else{
        keypressContainer.style.background="black";
    }
    if(e.key === 'z') ring(e.key);
});

//-------------------------------------------------------------------

const nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    if (window.scrollY > 120) {
        nav.style.top = 0;
    }else{
        nav.style.top = "-50px";
    }
});

//-----------------------------------------------------------------------------------------
//Form Event

const inputName =document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo= "";
let language= "";

inputName.addEventListener("input", (e)=>{
    pseudo=e.target.value;
});

select.addEventListener("input", (e)=>{
    language= e.target.value;
});

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if (cgv.checked) {
        document.querySelector("form > div").innerHTML = `
        <h3>Pseudo: ${pseudo}</3>
        <h4>Language: ${language}</h4>
        `;
    } else{
        alert("Veuillez accepter les CGV");
    }
});

//-----------------------------------------------------------------------------------------------------------
// Load Event

window.addEventListener("load", ()=>{
    console.log("Document chargé !");
});

//--------------------------------------------------------------------------------------------------------------
// ForEach event 

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("click", (e)=>{
        e.target.style.transform= "scale(0.7)";
    });
});

//-----------------------------------------------------------------------------------------------------
// addEventListeneer vs onClick
// onclick/onScroll/onMouseMove/.... ne sont pas recommandé  car on ne peur pas attribuer plusieurs éléments à 
// une seule balise

//document.body.onclick = function() {
//    console.log("click");
//};

//Bubbling => fin (de base l'eventlistener est paramétré en mode bubbling)
document.body.addEventListener("click", ()=>{
    console.log("click 1");
});

//Usecapture
document.body.addEventListener("click", ()=>{
    console.log("click 2");
},true);

//----------------------------------------------------------------------------------------------------
// Stop propagation

questionContainer.addEventListener('click', (e)=>{
    alert("Test!");
    e.stopPropagation();
});

//removeEventListener

//--------------------------------------------------------------------------------------------------------
//BOM (Browser Object Model)

//confirm
btn2.addEventListener("click", ()=>{
    confirm("Etes vous sûr de votre choix ?");
});

//prompt 
btn1.addEventListener("click", ()=> {
    let answer = prompt("entrez votre nom");

    questionContainer.innerHTML += "<h3> Bravo "+answer+"</3>";
});

//timer, compte a rebours
setTimeout(()=>{
    questionContainer.style.borderRadius = "300px";
},10000);

let interval = setInterval(()=>{
    document.body.innerHTML += 
    `
        <div class='box'>
            <h2>Nouvelle boite</h2>
        </div>
    `;
},1000);

document.body.addEventListener('click', (e)=>{
    e.target.remove(); 
    clearInterval(interval);
});

//Location
console.log(location.pathname);

//window.onload=()=>{
//    location.href = "http://twitter.fr";
//};

//Navigator

console.log(navigator.userAgent);

//History
//console.log(history);
//window.history.back();
//history.go();

//-----------------------------------------------------------------------------------------------
//SetProperty
window.addEventListener('mousemove', (e)=>{
    nav.style.setProperty('--x', e.layerX + "px");
    nav.style.setProperty('--y', e.layerY + "px");
});