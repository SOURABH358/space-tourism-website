const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.navbar');
const tabs = document.querySelector('.tabs');
toggle.addEventListener('click', () => {
    nav.classList.toggle('show');

})

let widthMatch = window.matchMedia('(min-width: 800px)');
let widthMatch2 = window.matchMedia('(min-width: 1200px)');

window.addEventListener('DOMContentLoaded',()=>{
    if(innerWidth>=1200){
        document.body.style.background = "url('./assets/crew/background-crew-desktop.jpg') no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
    }
    else if(innerWidth>=800){
        document.body.style.background = "url('./assets/crew/background-crew-tablet.jpg') no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
    }
    else{
        document.body.style.background = "url('./assets/crew/background-crew-mobile.jpg') no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
    }
})
widthMatch.addEventListener('change', (mm) => {
    if (mm.matches) {
        document.body.style.background = "url('./assets/crew/background-crew-tablet.jpg') no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
    }
})

widthMatch2.addEventListener('change', (mm) => {
    if (mm.matches) {
        document.body.style.background = "url('./assets/crew/background-crew-desktop.jpg') no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
    }
})
