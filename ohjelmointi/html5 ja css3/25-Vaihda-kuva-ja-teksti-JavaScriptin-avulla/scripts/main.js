function changeUser(){
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Mozilla is cool, Nimi';
}

function changeUser2(){
    const myHeading = document.querySelector('h1');
    myHeading.textContent = 'Is Brave even Cooler?';
    document.getElementById('btn1').style.backgroundColor = 'White';  

   var img1 = "images/1.gif";
   var img2 = "images/firefox-icon.png";
   
   var imgElement = document.getElementById('toggleImage');

   imgElement.src = (imgElement.src === img1)? img2 : img1;


    }
