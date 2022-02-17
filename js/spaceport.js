const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.navbar');
const tabs = document.querySelector('.tabs');
const pic = document.querySelector('.pic img');
toggle.addEventListener('click', () => {
    nav.classList.toggle('show');

})

let widthMatch = window.matchMedia('(min-width: 800px)');
let widthMatch2 = window.matchMedia('(min-width: 1200px)');

window.addEventListener('DOMContentLoaded',()=>{
    if(innerWidth>=1200){
        document.body.style.background = "url('./assets/technology/background-technology-desktop.jpg') no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
    }
    else if(innerWidth>=800){
        document.body.style.background = "url('./assets/technology/background-technology-tablet.jpg') no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        pic.setAttribute('src',"./assets/technology/image-spaceport-landscape.jpg")

    }
})
widthMatch.addEventListener('change', (mm) => {
    if (mm.matches) {
        document.body.style.background = "url('./assets/technology/background-technology-tablet.jpg') no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        pic.setAttribute('src',"./assets/technology/image-spaceport-landscape.jpg")
    }
})

widthMatch2.addEventListener('change', (mm) => {
    if (mm.matches) {
        document.body.style.background = "url('./assets/technology/background-technology-desktop.jpg') no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        pic.setAttribute('src',"./assets/technology/image-spaceport-potrait.jpg")
    }
})
