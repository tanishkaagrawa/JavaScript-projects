let btn1 = document.getElementById("mybutton1");
let btn2 = document.getElementById("mybutton2");
let copyCode = document.querySelector(".copyCode");
let rgb1 = "#000";
let rgb2 = "#fff";


const hexValues = ()=>{
    let myHaxCode = "0123456789abcdef";
    let colors = "#";
    for(let i=0; i<6;i++){
    colors = colors + myHaxCode[Math.floor(Math.random()*16)];
    }
   return colors;
}


const handleButton1 = () =>{
    rgb1 = hexValues();
    console.log(rgb1);
    document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, ${rgb2})`;
    copyCode.innerHTML = `background-image : Linear-gradient(to right , ${rgb1} ,  ${rgb2})`;
    btn1.style.background = rgb1;
    btn1.innerText = rgb1; 
    
};

const handleButton2 = () =>{
    rgb2 = hexValues();
    console.log(rgb2);
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, ${rgb2} )`;
    copyCode.innerHTML = `background-image : Linear-gradient(to right , ${rgb1} ,  ${rgb2})`;
    btn2.style.background = rgb2;

};

btn1.addEventListener("click" , handleButton1);
btn2.addEventListener("click" , handleButton2);