const h_open=document.getElementById('h-open-btn');
const h_con=document.getElementById('h-con');
const h_close=document.getElementById('h-close-btn');

h_open.addEventListener('click',()=>{
    h_con.classList.add('show');
    var s="6ft";
    setTimeout(function(){
        document.getElementById('par').innerHTML=s;
    },4000);
    
})

h_close.addEventListener('click',()=>{
    h_con.classList.remove('show');
})

const w_open=document.getElementById('w-open-btn');
const w_con=document.getElementById('w-con');
const w_close=document.getElementById('w-close-btn');

w_open.addEventListener('click',()=>{
    w_con.classList.add('show');
    var s="60kg";
    setTimeout(function(){
        document.getElementById('par-w').innerHTML=s;
    },4000);
})

w_close.addEventListener('click',()=>{
    w_con.classList.remove('show');
})


const bp_open=document.getElementById('bp-open-btn');
const bp_con=document.getElementById('bp-con');
const bp_close=document.getElementById('bp-close-btn');

bp_open.addEventListener('click',()=>{
    bp_con.classList.add('show');
    var s="90/60 mmHG";
    setTimeout(function(){
        document.getElementById('par-bp').innerHTML=s;
    },4000);
})

bp_close.addEventListener('click',()=>{
    bp_con.classList.remove('show');
})

const temp_open=document.getElementById('temp-open-btn');
const temp_con=document.getElementById('temp-con');
const temp_close=document.getElementById('temp-close-btn');

temp_open.addEventListener('click',()=>{
    temp_con.classList.add('show');
    var s="36 deg Celcius";
    setTimeout(function(){
        document.getElementById('par-temp').innerHTML=s;
    },4000);
})

temp_close.addEventListener('click',()=>{
    temp_con.classList.remove('show');
})


const ox_open=document.getElementById('ox-open-btn');
const ox_con=document.getElementById('ox-con');
const ox_close=document.getElementById('ox-close-btn');

ox_open.addEventListener('click',()=>{
    ox_con.classList.add('show');
    var s="95%";
    setTimeout(function(){
        document.getElementById('par-ox').innerHTML=s;
    },4000);
})

ox_close.addEventListener('click',()=>{
    ox_con.classList.remove('show');
})
