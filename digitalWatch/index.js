const currTime = () =>{
    let curtime = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText = curtime;
};
currTime();
const interval = setInterval(()=>{
    currTime();
}, 1000);

setTimeout(()=> clearInterval(interval), 5000);