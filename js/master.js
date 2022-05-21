let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color-option"));
}

document.querySelector(".toggle-settings .fa-gear").onclick = function() {
    this.classList.toggle("fa-spin");
    
    document.querySelector(".settings-box").classList.toggle("open");   
    };

    // switch colors
    const colorsLi = document.querySelectorAll(".colors-list li");
    
    colorsLi.forEach(li => {
        
        li.addEventListener("click", (e) => {
            document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
        });

    });

//select landing page element 
let landingPage = document.querySelector(".landing-page");

// get Array of images
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

setInterval(() => {

    //get random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

// change background image url
    landingPage.style.backgroundImage = 'url("images/'+ imgsArray[randomNumber]+'")';
},10000);



let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
    let skillsOffsetTop = ourSkills.offsetTop;
    
    let skillsOuterHeight = ourSkills.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
        let allskills = document.querySelectorAll(".skills-box .skills-progress span")
        allskills.forEach(skill => {

            skill.style.width = skill.dataset.progress;
        });

    }
    
};
//Creat Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        // Creat Overlay Element
        let overlay = document.createElement("div"); 

        // add Class to Overlay
        overlay.className = 'popup-overlay';

        // Append overlay to the Body
        document.body.appendChild(overlay);
        //creat the popup
            let popupBox = document.createElement("div");
            popupBox.className = 'popup-box';
        //Creat the Image
        let popupImage = document.createElement("img");
        //set image source
        popupImage.src = img.src;
        //Add image to popbox  
        popupBox.appendChild(popupImage);
        //Append the popbox to body
        document.body.appendChild(popupBox);
        // creat the close button
        let closeButton = document.createElement("span");
        // creat the close button text
        let closeButtonText = document.createTextNode("X");
        //Append closetext to closespan
        closeButton.appendChild(closeButtonText);
        //Add class to close button
        closeButton.className = "close-button";
        //Add close button to the Pop up Box
        popupBox.appendChild(closeButton);

  });
});

//close popup
document.addEventListener("click", function(e){

    if(e.target.className == 'close-button'){
        //remove the current popup
        e.target.parentNode.remove();
        //remove overlay
         document.querySelector(".popup-overlay").remove();
    }
});

//sellect All bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

//sellect All links
const alllinks = document.querySelectorAll(".links a");

function scroolToSomewhere(elements){
elements.forEach(ele => {
    ele.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
}
scroolToSomewhere(allBullets);
scroolToSomewhere(alllinks);
