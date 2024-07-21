let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minute");
let secondEl = document.getElementById("second");
setInterval(()=>{
    
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let hrotation = 30*htime + mtime/2;
    let mrotation = 6*mtime;
    let srotation = 6*stime;

    hourEl.style.transform = `rotate(${hrotation}deg)`;
    minuteEl.style.transform = `rotate(${mrotation}deg)`;
    secondEl.style.transform = `rotate(${srotation}deg)`;

},1000);
console.log(setInterval);