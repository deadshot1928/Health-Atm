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
const near_next=document.getElementById('near-next-btn');

const test_con=document.getElementById('test-con');
const test_next=document.getElementById('test-next-btn');

const res_con=document.getElementById('res-con');
const res_close=document.getElementById('res-close-btn');

var l=0,r=0;

var s1="Your vision is not very good.Please consult with an Eye Doctor in the Doctor finder section.";
var s2="Your vision is good, it doesn't require eyeglasses!!";

near_open.addEventListener('click',()=>{
    near_con.classList.add('show');
})

near_next.addEventListener('click',()=>{
    near_con.classList.remove('show');
    test_con.classList.add('show');

})

test_next.addEventListener('click',()=>{
    l=document.getElementById("left").value;
    r=document.getElementById("right").value;
    test_con.classList.remove('show');
    res_con.classList.add('show');
    if(l>=3&&r>=3)
        document.getElementById('par-res').innerHTML=s2;
    else
        document.getElementById('par-res').innerHTML=s1;
})

res_close.addEventListener('click',()=>{
    res_con.classList.remove('show');
})
