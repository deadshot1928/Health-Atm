const pi_open=document.getElementById('pi-open-btn');
const pi_con=document.getElementById('pi-con');
const pi_close=document.getElementById('pi-close-btn');

pi_open.addEventListener('click',()=>{
    
    var a=document.forms["main"];
    var x=a.querySelectorAll('input[type="checkbox"]:checked');
    var i=(x.length)*1000;
    document.getElementById('par').innerHTML=i;
    pi_con.classList.add('show');
})

pi_close.addEventListener('click',()=>{
    pi_con.classList.remove('show');
})

