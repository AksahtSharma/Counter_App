let inc = document.getElementById('inc');
let dec = document.getElementById('dis');
let res = document.getElementById('res');
let displaycount = document.getElementById('count');
let displayinc = document.getElementById('clickInc');
let displaydec = document.getElementById('clickDec');

let count = 0;

inc.addEventListener("click", ()=>{
    count++
    displaycount.textContent = count
    displayinc.textContent = count
})


dec.addEventListener("click", ()=>{
    count--
    displaycount.textContent = count
    displaydec.textContent = count
})

res.addEventListener("click", ()=>{
    count = 0
    displaycount.textContent = count
})

