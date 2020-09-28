

var tab = ["", "20px", "24px", "28px", "32px", "20px"];

document.getElementById('fontti').style.fontSize = tab[0];
function changeFontsize() {

if (document.getElementById('fontti').style.fontSize == tab[0]) {
    
    document.getElementById('fontti').style.fontSize = tab[1];
    document.getElementById("p1").innerHTML = "1";
}
else if (document.getElementById('fontti').style.fontSize == tab[1])
{
document.getElementById('fontti').style.fontSize = tab[2];
document.getElementById("p1").innerHTML = "2";
}
else if (document.getElementById('fontti').style.fontSize == tab[2])
{
document.getElementById('fontti').style.fontSize = tab[3];
document.getElementById("p1").innerHTML = "3";
}
else if (document.getElementById('fontti').style.fontSize == tab[3])
{
    document.getElementById('fontti').style.fontSize = tab[4];
    document.getElementById("p1").innerHTML = "4";
}
else if (document.getElementById('fontti').style.fontSize == tab[4])
{
    document.getElementById('fontti').style.fontSize = tab[5];
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
