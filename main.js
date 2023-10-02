//active section
let sections = document.querySelectorAll('section');
let nav = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            nav.forEach(link => {
                link.classList.remove('current');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('current');
            });
        }
    });
}
