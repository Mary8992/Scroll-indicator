const progressH = document.querySelector('.progress-bar');
const progressV = document.getElementById('progressbar');

//horizontal
window.addEventListener('scroll', () => {
    //we found our position in the viewport
    const winScroll = window.pageYOffset;
   //get total height
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = winScroll / height * 100;

    progressH.style.width = `${scrolled}%`
})

//vertical
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressV.style.height = progressHeight + '%'
}