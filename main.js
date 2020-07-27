
const elements = document.querySelectorAll(".hidden");
const windowHeight = window.innerHeight / 1.5;


scrollAppear = () => {
  elements.forEach(element => {
    //   get each element's distance from top of screen & computed height
    let positionFromTop = element.getBoundingClientRect().top;
    let elementHeight = parseInt(window.getComputedStyle(element).height);

    // trigger animation on scroll down
    if (positionFromTop < windowHeight) {
      element.classList.replace("hidden", "fade-in");
    }

    // re-hide elements after leaving the screen
    if (
      positionFromTop > windowHeight * 1.5 ||
      positionFromTop < -elementHeight
    ) {
      element.classList.replace("fade-in", "hidden");
    }
  });
};

window.addEventListener("scroll", scrollAppear);