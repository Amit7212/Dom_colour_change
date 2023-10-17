let background = document.getElementById("container")
let button = document.getElementById("button")

let colors = ["white","black","blue","green","purple","yellow","brown"]


button.addEventListener("click", changeColor)
// var i =0;
function changeColor(){

    
    background.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    

// i++;


// if(i===colors.length) i=0
    // console.log(i);

    
}


    
