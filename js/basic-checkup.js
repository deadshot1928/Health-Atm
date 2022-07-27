const h_open=document.getElementById('h-open-btn');
const h_con=document.getElementById('h-con');
const h_close=document.getElementById('h-close-btn');
const h_load=document.getElementById('h-load');

h_open.addEventListener('click',()=>{
    h_con.classList.add('show');
    var s="Your height is 6ft";
    setTimeout(function(){
        h_load.classList.add('hide-load');
        document.getElementById('par').innerHTML=s;
        
    },4000);
    
    
})

h_close.addEventListener('click',()=>{
    h_con.classList.remove('show');
})

const w_open=document.getElementById('w-open-btn');
const w_con=document.getElementById('w-con');
const w_close=document.getElementById('w-close-btn');
const w_load=document.getElementById('w-load');

w_open.addEventListener('click',()=>{
    w_con.classList.add('show');
    var s="Your Weight is 60kg";
    setTimeout(function(){
        w_load.classList.add('hide-load');
        document.getElementById('par-w').innerHTML=s;
    },4000);
})

w_close.addEventListener('click',()=>{
    w_con.classList.remove('show');
})


const bp_open=document.getElementById('bp-open-btn');
const bp_con=document.getElementById('bp-con');
const bp_close=document.getElementById('bp-close-btn');
const bp_load=document.getElementById('bp-load');

bp_open.addEventListener('click',()=>{
    bp_con.classList.add('show');
    var s="Your Blood Pressure is 90/60 mmHG";
    setTimeout(function(){
        bp_load.classList.add('hide-load');
        document.getElementById('par-bp').innerHTML=s;
    },4000);
})

bp_close.addEventListener('click',()=>{
    bp_con.classList.remove('show');
})

const temp_open=document.getElementById('temp-open-btn');
const temp_con=document.getElementById('temp-con');
const temp_close=document.getElementById('temp-close-btn');
const temp_load=document.getElementById('temp-load');

temp_open.addEventListener('click',()=>{
    temp_con.classList.add('show');
    var s="Your Temprature is 36 deg Celcius";
    setTimeout(function(){
        temp_load.classList.add('hide-load');
        document.getElementById('par-temp').innerHTML=s;
    },4000);
})

temp_close.addEventListener('click',()=>{
    temp_con.classList.remove('show');
})


const ox_open=document.getElementById('ox-open-btn');
const ox_con=document.getElementById('ox-con');
const ox_close=document.getElementById('ox-close-btn');
const ox_load=document.getElementById('ox-load');

ox_open.addEventListener('click',()=>{
    ox_con.classList.add('show');
    var s="Your Oxygen level is 95%";
    setTimeout(function(){
        ox_load.classList.add('hide-load');
        document.getElementById('par-ox').innerHTML=s;
    },4000);
})

ox_close.addEventListener('click',()=>{
    ox_con.classList.remove('show');
})
