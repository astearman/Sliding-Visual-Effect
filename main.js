
const elements = document.querySelectorAll(".hidden, .hidden2, .hidden3, .hidden4, .hidden5");
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

    if(positionFromTop < windowHeight) {
      element.classList.replace("hidden2", "fade-in2");
    }

    if(positionFromTop < windowHeight) {
      element.classList.replace("hidden3", "fade-in3");
    }

    if(positionFromTop < windowHeight) {
      element.classList.replace("hidden4", "fade-in4");
    }

    if(positionFromTop < windowHeight) {
      element.classList.replace("hidden5", "fade-in5");
    }

    // re-hide elements after leaving the screen
    if (
      positionFromTop > windowHeight * 1.5 ||
      positionFromTop < -elementHeight
    ) {
      element.classList.replace("fade-in", "hidden");
      element.classList.replace("fade-in2", "hidden2");
      element.classList.replace("fade-in3", "hidden3");
      element.classList.replace("fade-in4", "hidden4");
      element.classList.replace("fade-in5", "hidden5");
    }
  });
};

window.addEventListener("scroll", scrollAppear);




const text = document.querySelector('.fancy');
const stringText = text.textContent;
const splitText = stringText.split("");

text.textContent = "";

for(let i=0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}


const texts = ['all the love you can give   ', 'every day of your life   '];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if(count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }

  setTimeout(type, 250);
}());