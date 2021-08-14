console.log("Script is working")

// #f5ffb2!important;
const navBg = document.querySelector('#nav-bg')
navBg.addEventListener('click', () => {
    navBg.style.border = '3px solid #fceae8';
})

// let btnRemove = document.querySelector('.btn-remove');
// console.log(btnRemove);
// let buyNowButton = document.getElementsByClassName('buy-now-button');
// buyNowButton.addEventListener('click', ()=>{
//     console.log('button clicked');
// })
let btnRemove = document.querySelectorAll('.btn-remove');
console.log(btnRemove);
for (const btn of btnRemove) {
    btn.addEventListener('click', ()=>{
        btn.remove();
    })
    
}

// validation checking 

let inputMail = document.getElementById('input-mail');
let submitBtn = document.getElementById('submit-btn');
console.log(inputMail, submitBtn);
inputMail.addEventListener('keyup', (e)=>{
    let text = e.target.value;
    if(text.indexOf('@gmail.com') != -1){
        submitBtn.removeAttribute('disabled')
    }else{
        submitBtn.setAttribute('disabled', true)
    }
})