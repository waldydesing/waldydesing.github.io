const btnSwitch = document.querySelector('#switch');
const icon = document.querySelector('#toggle')

btnSwitch.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    icon.classList.toggle('fa-moon')
    icon.classList.toggle('fa-sun')
});
