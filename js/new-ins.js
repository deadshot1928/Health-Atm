const pi_open=document.getElementById('pi-open-btn');
const pi_con=document.getElementById('pi-con');
const pi_close=document.getElementById('pi-close-btn');

const no_con=document.getElementById('no-con');
const no_close=document.getElementById('no-close-btn');

pi_open.addEventListener('click',()=>{
    
    var a=document.forms["main"];
    var x=a.querySelectorAll('input[type="checkbox"]:checked');
    var i=(x.length)*1000;
    if(x.length==0)
    {
        no_con.classList.add('show'); 
    }
    else{
        document.getElementById('par').innerHTML=i;
    pi_con.classList.add('show');
    }
    
})

pi_close.addEventListener('click',()=>{
    pi_con.classList.remove('show');
})

no_close.addEventListener('click',()=>{
    no_con.classList.remove('show');
})