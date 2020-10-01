function changeUser(){
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    const myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla is cool, ' + myName;

}

function changeUser3(){
    const myHeading = document.querySelector('h1');
    myHeading.textContent = 'Is Brave even Cooler?';
    document.getElementById('btn1').style.backgroundColor = 'White';  

   var img1 = "images/1.gif";
   var img2 = "images/firefox-icon.png";
   
   var imgElement = document.getElementById('toggleImage');

   imgElement.src = (imgElement.src === img1)? img2 : img1;


    }
