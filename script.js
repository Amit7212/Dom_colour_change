let background = document.getElementById("container")
let button = document.getElementById("button")
let output = document.getElementById("give")

let colors = ["white","black","blue","green","purple", "red"]

button.addEventListener("click", ()=>{

    let rawData = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

    let hex_code = "#"
  

    for(let i = 0; i<6; i++){
        let random_num = Math.floor(Math.random()*rawData.length)
        
        hex_code += rawData[random_num]
    }
    
background.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    output.innerHTML=hex_code

})