
function scrollAppear() {
    const introText = document.querySelector('.intro-text');
    const introPosition = introText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear);