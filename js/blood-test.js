const ti_open=document.getElementById('ti-open-btn');
const ti_con=document.getElementById('ti-con');
const ti_close=document.getElementById('ti-close-btn');
const ti_load=document.getElementById('ti-load');

ti_open.addEventListener('click',()=>{
    ti_con.classList.add('show');
    var s="Tiphoid Test is completed!!";
    setTimeout(function(){
        ti_load.classList.add('hide-load');
        document.getElementById('par-ti').innerHTML=s;
        
    },4000);
})

ti_close.addEventListener('click',()=>{
    ti_con.classList.remove('show');
})

const hem_open=document.getElementById('hem-open-btn');
const hem_con=document.getElementById('hem-con');
const hem_close=document.getElementById('hem-close-btn');
const hem_load=document.getElementById('hem-load');

hem_open.addEventListener('click',()=>{
    hem_con.classList.add('show');
    var s="Hemoglobin Test is completed!!";
    setTimeout(function(){
        hem_load.classList.add('hide-load');
        document.getElementById('par-hem').innerHTML=s;
        
    },4000);
})

hem_close.addEventListener('click',()=>{
    hem_con.classList.remove('show');
})

const glu_open=document.getElementById('glu-open-btn');
const glu_con=document.getElementById('glu-con');
const glu_close=document.getElementById('glu-close-btn');
const glu_load=document.getElementById('glu-load');

glu_open.addEventListener('click',()=>{
    glu_con.classList.add('show');
    var s="Glucose Test is completed!!";
    setTimeout(function(){
        glu_load.classList.add('hide-load');
        document.getElementById('par-glu').innerHTML=s;
        
    },4000);
})

glu_close.addEventListener('click',()=>{
    glu_con.classList.remove('show');
})

const hiv_open=document.getElementById('hiv-open-btn');
const hiv_con=document.getElementById('hiv-con');
const hiv_close=document.getElementById('hiv-close-btn');
const hiv_load=document.getElementById('hiv-load');

hiv_open.addEventListener('click',()=>{
    hiv_con.classList.add('show');
    var s="HIV Test is completed!!";
    setTimeout(function(){
        hiv_load.classList.add('hide-load');
        document.getElementById('par-hiv').innerHTML=s;
        
    },4000);
})

hiv_close.addEventListener('click',()=>{
    hiv_con.classList.remove('show');
})


const wel_con=document.getElementById('wel-con');
const wel_close=document.getElementById('wel-close-btn');
const wel_load=document.getElementById('wel-load');

    wel_con.classList.add('show');
    var st="Blood Sample collected, You can now close this window";
    setTimeout(function(){
        wel_load.classList.add('hide-load');
        document.getElementById('par-wel').innerHTML=st;
        
    },4000);


wel_close.addEventListener('click',()=>{
    wel_con.classList.remove('show');
})

