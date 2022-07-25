const skin_open=document.getElementById('skin-open-btn');
const skin_con=document.getElementById('skin-con');
const skin_close=document.getElementById('skin-close-btn');

skin_open.addEventListener('click',()=>{
    skin_con.classList.add('show');
})

skin_close.addEventListener('click',()=>{
    skin_con.classList.remove('show');
})

const ear_open=document.getElementById('ear-open-btn');
const ear_con=document.getElementById('ear-con');
const ear_close=document.getElementById('ear-close-btn');

ear_open.addEventListener('click',()=>{
    ear_con.classList.add('show');
})

ear_close.addEventListener('click',()=>{
    ear_con.classList.remove('show');
})