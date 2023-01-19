const progress = document.querySelector('.progress-bar');

window.addEventListener('scroll', ()=>{
    //we found our position in the viewport
    const winScroll = window.pageYOffset;
   //get total height
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = winScroll / height * 100;

    progress.style.width = `${scrolled}%`
})