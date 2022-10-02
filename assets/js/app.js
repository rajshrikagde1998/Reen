//alert('practice')

var cl=console.log


let demoDiv = document.querySelector(".demo")
let inputRed = document.querySelector(".red")
let inputGreen = document.querySelector(".green")
let inputBlue = document.querySelector(".blue")
let paragraph =document.querySelector(".para")

let red;
let green;
let blue;

demoDiv.addEventListener("mousemove",onmouseMove)
demoDiv.addEventListener("click",onclick)


function onmouseMove(e){
	red=e.offsetX;
	green=e.offsetY;
	blue=e.offsetY+30;
	demoDiv.style.backgroundColor=`rgb(${red},${green},${blue})`
}


function onclick(event){
	cl(red,green,blue)
	inputRed.value=red;
	inputGreen.value=green;
	inputBlue.value=blue;
	paragraph.innerText=`rgb(${red},${green},${blue})`
}























