let r = true;
const a=document.querySelector('.alert');

document.getElementById('t').addEventListener('click',function(){
    r=!r;
    this.classList.toggle('g');
});

document.addEventListener('contextmenu',e=>{
    if(r){
        e.preventDefault();
        a.classList.add('show');
        setTimeout(()=>a.classList.remove('show'),2000);
    }
});