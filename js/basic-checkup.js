const h_open=document.getElementById('h-open-btn');
const h_con=document.getElementById('h-con');
const h_close=document.getElementById('h-close-btn');

h_open.addEventListener('click',()=>{
    h_con.classList.add('show');
})

h_close.addEventListener('click',()=>{
    h_con.classList.remove('show');
})

const w_open=document.getElementById('w-open-btn');
const w_con=document.getElementById('w-con');
const w_close=document.getElementById('w-close-btn');

w_open.addEventListener('click',()=>{
    w_con.classList.add('show');
})

w_close.addEventListener('click',()=>{
    w_con.classList.remove('show');
})


const bp_open=document.getElementById('bp-open-btn');
const bp_con=document.getElementById('bp-con');
const bp_close=document.getElementById('bp-close-btn');

bp_open.addEventListener('click',()=>{
    bp_con.classList.add('show');
})

bp_close.addEventListener('click',()=>{
    bp_con.classList.remove('show');
})

const temp_open=document.getElementById('temp-open-btn');
const temp_con=document.getElementById('temp-con');
const temp_close=document.getElementById('temp-close-btn');

temp_open.addEventListener('click',()=>{
    temp_con.classList.add('show');
})

temp_close.addEventListener('click',()=>{
    temp_con.classList.remove('show');
})


const ox_open=document.getElementById('ox-open-btn');
const ox_con=document.getElementById('ox-con');
const ox_close=document.getElementById('ox-close-btn');

ox_open.addEventListener('click',()=>{
    ox_con.classList.add('show');
})

ox_close.addEventListener('click',()=>{
    ox_con.classList.remove('show');
})
