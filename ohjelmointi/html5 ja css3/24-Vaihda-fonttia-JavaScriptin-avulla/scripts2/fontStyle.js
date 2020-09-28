/*
Turret Road
*/
var tab = ['', 'Roboto', 'Mansalva', 'Grenze', 'Arial' ];

document.getElementById('fontti').style.fontFamily = tab[0];
function changeFontstyle() {

if (document.getElementById('fontti').style.fontFamily == tab[0]) {
    
document.getElementById('fontti').style.fontFamily = tab[1];
document.getElementById("p").innerHTML = "Roboto";
document.getElementById("p1").innerHTML = "1";
}
else if (document.getElementById('fontti').style.fontFamily == tab[1])
{
document.getElementById('fontti').style.fontFamily = tab[2];
document.getElementById("p").innerHTML = "Mansalva";
document.getElementById("p1").innerHTML = "2";
}
else if (document.getElementById('fontti').style.fontFamily == tab[2])
{
document.getElementById('fontti').style.fontFamily = tab[3];
document.getElementById("p").innerHTML = "Grenze";
document.getElementById("p1").innerHTML = "3";
}
else if (document.getElementById('fontti').style.fontFamily == tab[3])
{
document.getElementById('fontti').style.fontFamily = tab[4];
document.getElementById("p").innerHTML = "Arial";
document.getElementById("p1").innerHTML = "4";
}
else if (document.getElementById('fontti').style.fontFamily == tab[4])
{
document.getElementById('fontti').style.fontFamily = tab[0];
document.getElementById("p").innerHTML = "Courier New";
document.getElementById("p1").innerHTML = "5";
}
}













/*

var tab = ["20px", "24px", "28px", "32px", "20px"];

document.getElementById('fontti').style.fontSize = tab[0];
function changeFontsize(font) {

 if (x == tab[0]) {

x = tab[1];
}
else if (x == tab[1])
{
x = tab[2];
}
else if (x == tab[2])
{
x = tab[3];
}
else if (x == tab[3])
{
x = tab[4];
}
}
*/
