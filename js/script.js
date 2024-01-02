function handleScroll() {
    var scrollPosition = window.scrollY; 
    if (scrollPosition > 125) {
        document.getElementById('navbar').classList.add('effect1');
    } else {
        document.getElementById('navbar').classList.remove('effect1');
    }
}

function opacityABout() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
        document.getElementById('ABOUT').classList.remove('effect3');
    } else {
        document.getElementById('ABOUT').classList.add('effect3');
    } 
}

function opacitySkill() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 800) {
        document.getElementById('SKILL').classList.remove('effect3');
    } else {
        document.getElementById('SKILL').classList.add('effect3');
    } 
}

window.addEventListener('scroll',opacitySkill);
window.addEventListener('scroll',opacityABout);
window.addEventListener('scroll', handleScroll);

