const ti_open=document.getElementById('ti-open-btn');
const ti_con=document.getElementById('ti-con');
const ti_close=document.getElementById('ti-close-btn');

ti_open.addEventListener('click',()=>{
    ti_con.classList.add('show');
})

ti_close.addEventListener('click',()=>{
    ti_con.classList.remove('show');
})

const hem_open=document.getElementById('hem-open-btn');
const hem_con=document.getElementById('hem-con');
const hem_close=document.getElementById('hem-close-btn');

hem_open.addEventListener('click',()=>{
    hem_con.classList.add('show');
})

hem_close.addEventListener('click',()=>{
    hem_con.classList.remove('show');
})

const glu_open=document.getElementById('glu-open-btn');
const glu_con=document.getElementById('glu-con');
const glu_close=document.getElementById('glu-close-btn');

glu_open.addEventListener('click',()=>{
    glu_con.classList.add('show');
})

glu_close.addEventListener('click',()=>{
    glu_con.classList.remove('show');
})

const hiv_open=document.getElementById('hiv-open-btn');
const hiv_con=document.getElementById('hiv-con');
const hiv_close=document.getElementById('hiv-close-btn');

hiv_open.addEventListener('click',()=>{
    hiv_con.classList.add('show');
})

hiv_close.addEventListener('click',()=>{
    hiv_con.classList.remove('show');
})

