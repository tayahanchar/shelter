'use strict';

import './style.css';
import '../../assets/images/start-screen-puppy.png';
import '../../assets/images/about-pets.png';
import '../../assets/images/pets-katrine.png';
import '../../assets/images/pets-jennifer.png';
import '../../assets/images/pets-woody.png';
import '../../assets/images/Arrowright.svg';
import '../../assets/images/Arrowleft.svg';
import '../../assets/images/icon-pet-food.svg';
import '../../assets/images/icon-transportation.svg';
import '../../assets/images/icon-toys.svg';
import '../../assets/images/icon-bowls-and-cups.svg';
import '../../assets/images/icon-shampoos.svg';
import '../../assets/images/icon-vitamins.svg';
import '../../assets/images/icon-medicines.svg';
import '../../assets/images/icon-collars-leashes.svg';
import '../../assets/images/icon-sleeping-area.svg';
import '../../assets/images/donation-dog.png';
import '../../assets/images/credit-card.svg';
import '../../assets/images/footer-puppy.png';
import '../../assets/images/icon-email.svg';
import '../../assets/images/icon-phone.svg';
import '../../assets/images/icon-marker.svg';
import '../../assets/images/vector.svg';


// Burger menu

const burgerIcon = document.querySelector('.wrapper__burger');
const burgerMenu = document.querySelector('.hide__burger-menu');
const wrapper = document.querySelector('.modal');
const modalItems = document.querySelectorAll('.modal-item');
const slider = document.querySelector('.carousel');

burgerIcon.addEventListener('click', checkMenu);

function checkMenu() {
  if(burgerIcon.classList.contains('start') || burgerIcon.classList.contains('show')) {
    hideBurgerIcon();
    showBurgerMenu();
    showOverlaw();
  } else if (burgerIcon.classList.contains('hide')) {
    showBurgerIcon();
    hideBurgerMenu();
    hideOverlaw();
  }
}

function hideBurgerIcon() {
  burgerIcon.classList.remove('start');
  burgerIcon.classList.remove('show');
  burgerIcon.classList.add('hide');
}

function showBurgerIcon() {
  burgerIcon.classList.remove('hide');
  burgerIcon.classList.add('show');
}

function showBurgerMenu() {
  burgerMenu.classList.remove('hide__burger-menu');
  burgerMenu.classList.add('show__burger-menu');
}

function hideBurgerMenu() {
  burgerMenu.classList.remove('show__burger-menu');
  burgerMenu.classList.add('hide__burger-menu');
}

function showOverlaw() {
  wrapper.classList.add('overlay');
  document.body.classList.add('overflow-y');
}

function hideOverlaw() {
  wrapper.classList.remove('overlay');
  document.body.classList.remove('overflow-y');
}

wrapper.addEventListener('click', hideModal)

function hideModal() {
  showBurgerIcon();
  hideBurgerMenu();
  hideOverlaw();
}

window.addEventListener('resize', overflow);

function overflow() {
  if(window.innerWidth >=768) {
    showBurgerIcon();
    hideBurgerMenu();
    hideOverlaw();
  }
}

modalItems.forEach(element => {element.addEventListener('click', hideModalWhenClick);});

function hideModalWhenClick() {
  showBurgerIcon();
  hideBurgerMenu();
  hideOverlaw();
}

// Carousel

const petsList = [
  {
    name: 'Jennifer',
    img: 'assets/images/pets-jennifer.png',
    type: 'Dog',
    breed: 'Labrador',
    description: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
  },
  {
    name: 'Sophia',
    img: 'assets/images/pets-sophia.png',
    type: 'Dog',
    breed: 'Shih tzu',
    description: 'Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
    age: '1 month',
    inoculations: ['parvovirus'],
    diseases: ['none'],
  },
  {
    name: 'Woody',
    img: 'assets/images/pets-woody.png',
    type: 'Dog',
    breed: 'Golden Retriever',
    description: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    age: '3 years 6 months',
    inoculations: ['adenovirus', 'distemper'],
    diseases: ['right back leg mobility reduced'],
  },
  {
    name: 'Scarlett',
    img: 'assets/images/pets-scarlett.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    age: '3 months',
    inoculations: ['parainfluenzar'],
    diseases: ['none'],
  },
  {
    name: 'Katrine',
    img: 'assets/images/pets-katrine.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    age: '6 months',
    inoculations: ['panleukopenia'],
    diseases: ['none'],
  },
  {
    name: 'Timmy',
    img: 'assets/images/pets-timmy.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    age: '2 years 3 months',
    inoculations: ['calicivirus'],
    diseases: ['kidney stones'],
  },
  {
    name: 'Freddie',
    img: 'assets/images/pets-freddie.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human\'s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    age: '2 months',
    inoculations: ['rabies'],
    diseases: ['kidney stones'],
  },
  {
    name: 'Charly',
    img: 'assets/images/pets-charly.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn\'t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    age: '8 years',
    inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
    diseases: ['deafness', 'blindness'],
  },
  {
    name: 'Sophia',
    img: 'assets/images/pets-sophia.png',
    type: 'Dog',
    breed: 'Shih tzu',
    description: 'Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
    age: '1 month',
    inoculations: ['parvovirus'],
    diseases: ['none'],
  },
]

formatPetsList(petsList);

function formatPetsList(petsList) {
  petsList.forEach(item => formatPetItem(item));
}

function formatPetItem(item) {
  const sliderCard = document.createElement('div');
  sliderCard.dataset.id = item.name;
  sliderCard.classList.add('slider__card');

  const sliderCardImg = document.createElement('img');
  sliderCardImg.src = item.img;

  const sliderCardPetsName = document.createElement('p');
  sliderCardPetsName.classList.add('pet__name');
  sliderCardPetsName.textContent = item.name;

  const sliderCardButton = document.createElement('p');
  sliderCardButton.classList.add('about-pet');
  sliderCardButton.textContent = 'Learn more';

  sliderCard.append(sliderCardImg);
  sliderCard.append(sliderCardPetsName);
  sliderCard.append(sliderCardButton);
  slider.append(sliderCard);

}

///

const buttonLeft = document.querySelector('.buttom__left');
const buttonRight = document.querySelector('.buttom__right');
const buttonLeftNew = document.querySelector('.buttom__left-new');
const buttonRightNew = document.querySelector('.buttom__right-new');
const cards = document.querySelectorAll('.slider__card');

buttonLeft.addEventListener('click', moveLeft);
buttonRight.addEventListener('click', moveRight);
buttonLeftNew.addEventListener('click', moveLeft);
buttonRightNew.addEventListener('click', moveRight);


function moveLeft() {
  if(window.innerWidth >= 1280) {
    slider.classList.add('transition-left-1280');
    buttonLeft.removeEventListener('click', moveLeft);
    buttonRight.removeEventListener('click', moveRight);
  } else if (window.innerWidth < 1280 && window.innerWidth >=768){
    slider.classList.add('transition-left-768');
    buttonLeft.removeEventListener('click', moveLeft);
    buttonRight.removeEventListener('click', moveRight);
  } else if (window.innerWidth < 768){
    slider.classList.add('transition-left-320');
    buttonLeft.removeEventListener('click', moveLeft);
    buttonRight.removeEventListener('click', moveRight); 
    buttonLeftNew.removeEventListener('click', moveLeft);
    buttonRightNew.removeEventListener('click', moveRight);
  }
}

function moveRight() {
  if(window.innerWidth >= 1280) {
    slider.classList.add('transition-right-1280');
    buttonLeft.removeEventListener('click', moveLeft);
    buttonRight.removeEventListener('click', moveRight);
  } else if (window.innerWidth < 1280 && window.innerWidth >=768){
    slider.classList.add('transition-right-768');
    buttonLeft.removeEventListener('click', moveLeft);
    buttonRight.removeEventListener('click', moveRight);
  } else if (window.innerWidth < 768){
    slider.classList.add('transition-right-320');
    buttonLeft.removeEventListener('click', moveLeft);
    buttonRight.removeEventListener('click', moveRight);
    buttonLeftNew.removeEventListener('click', moveLeft);
    buttonRightNew.removeEventListener('click', moveRight);
  }
}


slider.addEventListener('animationend', (animationEvent) => {

  buttonLeft.addEventListener('click', moveLeft);
  buttonRight.addEventListener('click', moveRight);
  buttonLeftNew.addEventListener('click', moveLeft);
  buttonRightNew.addEventListener('click', moveRight);

  if (animationEvent.animationName === "move-left-1280" || animationEvent.animationName === "move-left-768" || animationEvent.animationName === "move-left-320") {
    slider.classList.remove('transition-left-1280');
    slider.classList.remove('transition-left-768');
    slider.classList.remove('transition-left-320');

    if(window.innerWidth >= 1280) {
      cards[3].innerHTML = cards[0].innerHTML;
      cards[4].innerHTML = cards[1].innerHTML;
      cards[5].innerHTML = cards[2].innerHTML;
      cards[3].dataset.id = cards[0].dataset.id;
      cards[4].dataset.id = cards[1].dataset.id;
      cards[5].dataset.id = cards[2].dataset.id;

      const newItems = [];

      while (newItems.length < 3) {
        const item = petsList[Math.floor(Math.random() * 8)];

        if (
          item.name !== cards[3].dataset.id &&
          item.name !== cards[4].dataset.id &&
          item.name !== cards[5].dataset.id &&
          !newItems.map(i => i.name).includes(item.name)
        ) {
          newItems.push(item);
        }
      }

      const card1 = createNewItem(cards[0], newItems[0]);
      const card2 = createNewItem(cards[1], newItems[1]);
      const card3 = createNewItem(cards[2], newItems[2]);

      const card7 = createNewItem(cards[6], newItems[0]);
      const card8 = createNewItem(cards[7], newItems[1]);
      const card9 = createNewItem(cards[8], newItems[2]);

    } else if (window.innerWidth < 1280 && window.innerWidth >=768){
      cards[3].innerHTML = cards[1].innerHTML;
      cards[4].innerHTML = cards[2].innerHTML;
      cards[3].dataset.id = cards[1].dataset.id;
      cards[4].dataset.id = cards[2].dataset.id;

      const newItems = [];

      while (newItems.length < 2) {
        const item = petsList[Math.floor(Math.random() * 8)];

        if (
          item.name !== cards[3].dataset.id &&
          item.name !== cards[4].dataset.id &&
          item.name !== cards[5].dataset.id &&
          item.name !== cards[6].dataset.id &&
          !newItems.map(i => i.name).includes(item.name)
        ) {
          newItems.push(item);
        }
      }

      const card1 = createNewItem(cards[1], newItems[0]);
      const card2 = createNewItem(cards[2], newItems[1]);

    } else if (window.innerWidth < 768){
    cards[3].innerHTML = cards[2].innerHTML;
    cards[3].dataset.id = cards[2].dataset.id;

    const newItems = [];

      while (newItems.length < 1) {
        const item = petsList[Math.floor(Math.random() * 8)];

        if (
          item.name !== cards[3].dataset.id &&
          item.name !== cards[4].dataset.id
        ) {
          newItems.push(item);
        }
      }

    const card2 = createNewItem(cards[2], newItems[0]);
    }

  } else if (animationEvent.animationName === "move-right-1280" || animationEvent.animationName === "move-right-768" || animationEvent.animationName === "move-right-320") {
    slider.classList.remove('transition-right-1280');
    slider.classList.remove('transition-right-768');
    slider.classList.remove('transition-right-320');


    if(window.innerWidth >= 1280) {
      cards[3].innerHTML = cards[6].innerHTML;
      cards[4].innerHTML = cards[7].innerHTML;
      cards[5].innerHTML = cards[8].innerHTML;
      cards[3].dataset.id = cards[6].dataset.id;
      cards[4].dataset.id = cards[7].dataset.id;
      cards[5].dataset.id = cards[8].dataset.id;

      const newItems = [];

      while (newItems.length < 3) {
        const item = petsList[Math.floor(Math.random() * 8)];

        if (
          item.name !== cards[3].dataset.id &&
          item.name !== cards[4].dataset.id &&
          item.name !== cards[5].dataset.id &&
          !newItems.map(i => i.name).includes(item.name)
        ) {
          newItems.push(item);
        }
      }

      const card1 = createNewItem(cards[0], newItems[0]);
      const card2 = createNewItem(cards[1], newItems[1]);
      const card3 = createNewItem(cards[2], newItems[2]);
      const card7 = createNewItem(cards[6], newItems[0]);
      const card8 = createNewItem(cards[7], newItems[1]);
      const card9 = createNewItem(cards[8], newItems[2]);

    } else if (window.innerWidth < 1280 && window.innerWidth >=768){
      cards[3].innerHTML = cards[5].innerHTML;
      cards[4].innerHTML = cards[6].innerHTML;
      cards[3].dataset.id = cards[5].dataset.id;
      cards[4].dataset.id = cards[6].dataset.id;

      const newItems = [];

      while (newItems.length < 2) {
        const item = petsList[Math.floor(Math.random() * 8)];

        if (
          item.name !== cards[3].dataset.id &&
          item.name !== cards[4].dataset.id &&
          item.name !== cards[1].dataset.id &&
          item.name !== cards[2].dataset.id &&
          !newItems.map(i => i.name).includes(item.name)
        ) {
          newItems.push(item);
        }
      }
  
      const card2 = createNewItem(cards[5], newItems[0]);
      const card3 = createNewItem(cards[6], newItems[1]);
  
      } else if (window.innerWidth < 768){
      cards[3].innerHTML = cards[4].innerHTML;
      cards[3].dataset.id = cards[4].dataset.id;

      const newItems = [];

      while (newItems.length < 1) {
        const item = petsList[Math.floor(Math.random() * 8)];

        if (
          item.name !== cards[3].dataset.id &&
          item.name !== cards[2].dataset.id
        ) {
          newItems.push(item);
        }
      }
  
      const card2 = createNewItem(cards[4], newItems[0]);
      }
  }
})


  function createNewItem(card, item) {
  const slideImg = document.createElement('img');
  slideImg.src = item.img;

  const slidePetsName = document.createElement('p');
  slidePetsName.classList.add('pet__name');
  slidePetsName.textContent = item.name;

  const slideCardButton = document.createElement('p');
  slideCardButton.classList.add('about-pet');
  slideCardButton.textContent = 'Learn more';

  card.innerHTML = ''

  card.dataset.id = item.name;

  card.append(slideImg);
  card.append(slidePetsName);
  card.append(slideCardButton);

  return card;
  }

  //// Popup


  slider.addEventListener('click', showPetsCard);

  function showPetsCard(event) {

    let item = event.target.parentElement.dataset.id || event.target.dataset.id;

    let popapItem  = petsList.find(petsItem => petsItem.name == item);
    createPopapItem (popapItem);
  }

  function createPopapItem (item) {

  const popapCard = document.createElement('div');
  popapCard.classList.add('modal__card');

  const popapContent = document.createElement('div');
  popapContent.classList.add('modal__content');

  const popapCardImg = document.createElement('img');
  popapCardImg.classList.add('modal__content-img');
  popapCardImg.src = item.img;

  const popapPetsName = document.createElement('p');
  popapPetsName.classList.add('modal__pet-name');
  popapPetsName.textContent = item.name;

  const popapPetsType = document.createElement('p');
  popapPetsType.classList.add('modal__pet-type');
  popapPetsType.textContent = `${item.type} - ${item.breed}`;

  const popapPetsDescription = document.createElement('p');
  popapPetsDescription.classList.add('modal__pet-description');
  popapPetsDescription.textContent = item.description;


  const popapPetsList = document.createElement('ul');
  popapPetsList.classList.add('modal__pet-list');

  const popapPetsAge = document.createElement('li');
  popapPetsAge.classList.add('modal__pet-list-item');
  popapPetsAge.innerHTML = `<span><b>Age: </b>${item.age}</span>`;

  const popapPetsInoculations = document.createElement('li');
  popapPetsInoculations.classList.add('modal__pet-list-item');
  popapPetsInoculations.innerHTML = `<span><b>Inoculations: </b>${item.inoculations}</span>`;

  const popapPetsDiseases = document.createElement('li');
  popapPetsDiseases.classList.add('modal__pet-list-item');
  popapPetsDiseases.innerHTML = `<span><b>Diseases: </b>${item.diseases}</span>`;

  const button = document.createElement('div');
  button.classList.add('modal__button');
  button.innerHTML = `<img class="modal__img" src="assets/images/vector.svg" alt="close">`;


  popapCard.append(popapCardImg);
  popapCard.append(popapContent);
  popapCard.append(button);
  popapContent.append(popapPetsName);
  popapContent.append(popapPetsType);
  popapContent.append(popapPetsDescription);
  popapContent.append(popapPetsList);
  popapPetsList.append(popapPetsAge);
  popapPetsList.append(popapPetsInoculations);
  popapPetsList.append(popapPetsDiseases);
  document.body.prepend(popapCard);

  showModalWindow();
  }

  document.body.addEventListener('click', closePopapCard);

  function closePopapCard(event) {
    if(event.target.classList.contains('modal__button') || event.target.classList.contains('modal__img') || event.target.classList.contains('modal__window') ) {
      document.querySelector('.modal__card').remove();
      closeModalWindow();
    }
  }

  function showModalWindow() {
    wrapper.classList.add('modal__window');
    document.body.classList.add('overflow-y');
  }
  
  function closeModalWindow() {
    wrapper.classList.remove('modal__window');
    document.body.classList.remove('overflow-y');
  }


