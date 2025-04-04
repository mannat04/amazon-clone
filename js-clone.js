const imgs=document.querySelectorAll('.hero-section ul img');
const prev=document.querySelector('.a1');
const nex=document.querySelector('.a2');

let n=0;
function change_slide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}

prev.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    change_slide();
})
nex.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++
      
    }else{
        n=0;
    }
    change_slide();
})