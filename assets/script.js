const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];

//Variable globale
const dotsContainer = document.querySelector('.dots');
const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');
const image = document.querySelector('.banner-img');
const title = document.querySelector('#banner p');
let indexUser = 0;

//Methode pour afficher les dots
const displayDots = () => {
  dotsContainer.innerHTML = ''; //on s'assure que la div class dots est vide
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
    if (indexUser === i) {
      dot.classList.add('dot_selected');
    }
  }
};
displayDots();
//Variable pour sélectionner les div de la class dot
const tabDots = document.querySelectorAll('.dots .dot');

//Méthode pour gérer le click droit
const handleRightClick = () => {
  if (tabDots.length > 0) {
    tabDots[indexUser].classList.remove('dot_selected'); //on déselectionne au cas où un bouton qui est sélectionné
    indexUser++;
    if (indexUser > slides.length - 1) {
      indexUser = 0;
    }
    tabDots[indexUser].classList.add('dot_selected');
    image.src = './assets/images/slideshow/' + slides[indexUser].image;
    title.innerHTML = slides[indexUser].tagLine;
  } else {
    console.error("il n'y a pas de dot dans le tableau");
  }
};

arrowRight.addEventListener('click', handleRightClick);
//Méthode pour gérer le click gauche
const handleLeftClick = () => {
  if (tabDots.length > 0) {
    tabDots[indexUser].classList.remove('dot_selected'); //on déselectionne au cas où un bouton qui est sélectionné
    indexUser--;
    if (indexUser < 0) {
      indexUser = slides.length - 1;
    }
    tabDots[indexUser].classList.add('dot_selected');
    image.src = './assets/images/slideshow/' + slides[indexUser].image;
    title.innerHTML = slides[indexUser].tagLine;
  } else {
    console.error("il n'y a pas de dot dans le tableau");
  }
};

arrowLeft.addEventListener('click', handleLeftClick);
