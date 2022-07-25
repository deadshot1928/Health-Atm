const far_open=document.getElementById('far-open-btn');
const far_con=document.getElementById('far-con');
const far_close=document.getElementById('far-close-btn');

far_open.addEventListener('click',()=>{
    far_con.classList.add('show');
})

far_close.addEventListener('click',()=>{
    far_con.classList.remove('show');
})

const near_open=document.getElementById('near-open-btn');
const near_con=document.getElementById('near-con');
const near_close=document.getElementById('near-close-btn');

near_open.addEventListener('click',()=>{
    near_con.classList.add('show');
})

near_close.addEventListener('click',()=>{
    near_con.classList.remove('show');
})