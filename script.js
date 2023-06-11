const images=document.querySelectorAll('img');
const divs=document.querySelectorAll('.child');
const your_score=document.querySelector('#you');
const computer_score=document.querySelector('#computer');
const button=document.querySelector('button');
const banner=document.querySelector('#bn');
button.onclick=()=>{
    banner.classList.add('visible');
    setTimeout(()=>{
        banner.classList.remove('visible');
    },1000)
    for(let i=1;i<=5;i++)
    {
        
    }
}
function clicked_image(e)
{
    let selected;
    selected=e.target.id;
    
}


images.forEach((Image)=>{
    Image.addEventListener('click',clicked_image);
})
