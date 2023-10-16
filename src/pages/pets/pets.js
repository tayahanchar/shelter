'use strict';

import './pets.css';
import '../../assets/images/pets-katrine.png';
import '../../assets/images/pets-jennifer.png';
import '../../assets/images/pets-woody.png';
import '../../assets/images/pets-sophia.png';
import '../../assets/images/pets-timmy.png';
import '../../assets/images/pets-charly.png';
import '../../assets/images/pets-scarlett.png';
import '../../assets/images/pets-freddie.png';

// Burger menu

const burgerIcon = document.querySelector('.wrapper__burger');
const burgerMenu = document.querySelector('.hide__burger-menu');
const wrapper = document.querySelector('.modal')
const modalItem = document.querySelector('.modal-item');
const burgerLine = document.querySelectorAll('.line');

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
  burgerLine.forEach(element => {element.classList.remove('line');})
  burgerLine.forEach(element => {element.classList.add('line_peach');})
}

function showBurgerIcon() {
  burgerIcon.classList.remove('hide');
  burgerIcon.classList.add('show');
  burgerLine.forEach(element => {element.classList.remove('line_peach');})
  burgerLine.forEach(element => {element.classList.add('line');})
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

modalItem.addEventListener('click', hideModalWhenClick);

function hideModalWhenClick() {
  showBurgerIcon();
  hideBurgerMenu();
  hideOverlaw();
}

// Pagination

const slider = document.querySelector('.slider');
const buttonRight = document.querySelector('.buttom__right');
const buttonLeft = document.querySelector('.buttom__left');
const pageNumber = document.querySelector('.buttom__center');
const buttonEnd = document.querySelector('.buttom__end');
const buttonStart = document.querySelector('.buttom__start');
let page = 1;
pageNumber.innerHTML = page;

const list = [
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
]



  let listsObject = {
    list1: {},
    list2: {},
    list3: {},
    list4: {},
    list5: {},
    list6: {},
    list7: {},
    list8: {},
    list9: {},
    list10: {},
    list11: {},
    list12: {},
    list13: {},
    list14: {},
    list15: {},
    list16: {},
  }



if(window.innerWidth >= 1280) {
  listsObject.list1 = shuffle(list);
  listsObject.list2 = shuffle(list);
  listsObject.list3 = shuffle(list);
  listsObject.list4 = shuffle(list);
  listsObject.list5 = shuffle(list);
  listsObject.list6 = shuffle(list);
  formatPetsList(listsObject.list1);
} else if (window.innerWidth < 1280 && window.innerWidth >=768){
  listsObject.list1 = list.slice(0, 6);
  listsObject.list2 = shuffle(list).slice(0, 6);
  listsObject.list3 = shuffle(list).slice(0, 6);
  listsObject.list4 = shuffle(list).slice(0, 6);
  listsObject.list5 = shuffle(list).slice(0, 6);
  listsObject.list6 = shuffle(list).slice(0, 6);
  listsObject.list7 = shuffle(list).slice(0, 6);
  listsObject.list8 = shuffle(list).slice(0, 6);
  formatPetsList(listsObject.list1);
  } else if (window.innerWidth < 768){
  listsObject.list1 = list.slice(0, 3);
  listsObject.list2 = shuffle(list).slice(0, 3);
  listsObject.list3 = shuffle(list).slice(0, 3);
  listsObject.list4 = shuffle(list).slice(0, 3);
  listsObject.list5 = shuffle(list).slice(0, 3);
  listsObject.list6 = shuffle(list).slice(0, 3);
  listsObject.list7 = shuffle(list).slice(0, 3);
  listsObject.list8 = shuffle(list).slice(0, 3);
  listsObject.list9 = shuffle(list).slice(0, 3);
  listsObject.list10 = shuffle(list).slice(0, 3);
  listsObject.list11 = shuffle(list).slice(0, 3);
  listsObject.list12 = shuffle(list).slice(0, 3);
  listsObject.list13 = shuffle(list).slice(0, 3);
  listsObject.list14 = shuffle(list).slice(0, 3);
  listsObject.list15 = shuffle(list).slice(0, 3);
  listsObject.list16 = shuffle(list).slice(0, 3);
  formatPetsList(listsObject.list1);
  }


buttonRight.addEventListener('click', shiftRight);
buttonLeft.addEventListener('click', shiftLeft);


buttonEnd.addEventListener('click', endList);
buttonStart.addEventListener('click', startList);


function endList() {
  deleteList();
  buttonStart.classList.remove('disable');
  buttonStart.classList.add('active');
  buttonLeft.classList.remove('disable');
  buttonLeft.classList.add('active');
  buttonEnd.classList.remove('active');
  buttonEnd.classList.add('disable');
  buttonRight.classList.remove('active');
  buttonRight.classList.add('disable');

  if(window.innerWidth >= 1280) {
    page = 6;
    pageNumber.innerHTML = page;
    formatPetsList(listsObject.list6);
  } else if (window.innerWidth < 1280 && window.innerWidth >=768){
    page = 8;
    pageNumber.innerHTML = page;
    formatPetsList(listsObject.list8);
  } else if (window.innerWidth < 768){
    page = 16;
    pageNumber.innerHTML = page;
    formatPetsList(listsObject.list16);
  }
}

function startList() {
  deleteList();
  page = 1;
  formatPetsList(listsObject.list1);
  pageNumber.innerHTML = page;
  buttonStart.classList.remove('active');
  buttonStart.classList.add('disable');
  buttonLeft.classList.remove('active');
  buttonLeft.classList.add('disable');
  buttonEnd.classList.remove('disable');
  buttonEnd.classList.add('active');
  buttonRight.classList.remove('disable');
  buttonRight.classList.add('active');
}



function shuffle(array) {
  return [...array.sort(() => Math.random() - 0.5)];
}

function shiftRight() {

  if(window.innerWidth >= 1280) {
    if(page === 6) {
      return;
    }

    deleteList();
    page++;

    switch (page) {
    case 1:
      formatPetsList(listsObject.list1);
      pageNumber.innerHTML = page;
      buttonStart.classList.remove('active');
      buttonStart.classList.add('disable');
      buttonLeft.classList.remove('active');
      buttonLeft.classList.add('disable');
      break;
    case 2:
      formatPetsList(listsObject.list2);
      pageNumber.innerHTML = page;
      buttonStart.classList.remove('disable');
      buttonStart.classList.add('active');
      buttonLeft.classList.remove('disable');
      buttonLeft.classList.add('active');
      break;
    case 3:
      formatPetsList(listsObject.list3);
      pageNumber.innerHTML = page;
      break;
    case 4:
      formatPetsList(listsObject.list4);
      pageNumber.innerHTML = page;
      break;
    case 5:
      formatPetsList(listsObject.list5);
      pageNumber.innerHTML = page;
      buttonEnd.classList.remove('disable');
      buttonEnd.classList.add('active');
      buttonRight.classList.remove('disable');
      buttonRight.classList.add('active');
      break;
    case 6:
      formatPetsList(listsObject.list6);
      pageNumber.innerHTML = page;
      buttonEnd.classList.remove('active');
      buttonEnd.classList.add('disable');
      buttonRight.classList.remove('active');
      buttonRight.classList.add('disable');
      break;
    }
  } else if (window.innerWidth < 1280 && window.innerWidth >=768){

    if(page === 8) {
      return;
    }

    deleteList();
    page++;

    switch (page) {
    case 1:
      formatPetsList(listsObject.list1);
      pageNumber.innerHTML = page;
      buttonStart.classList.remove('active');
      buttonStart.classList.add('disable');
      buttonLeft.classList.remove('active');
      buttonLeft.classList.add('disable');
      break;
    case 2:
      formatPetsList(listsObject.list2);
      pageNumber.innerHTML = page;
      buttonStart.classList.remove('disable');
      buttonStart.classList.add('active');
      buttonLeft.classList.remove('disable');
      buttonLeft.classList.add('active');
      break;
    case 3:
      formatPetsList(listsObject.list3);
      pageNumber.innerHTML = page;
      break;
    case 4:
      formatPetsList(listsObject.list4);
      pageNumber.innerHTML = page;
      break;
    case 5:
      formatPetsList(listsObject.list5);
      pageNumber.innerHTML = page;
      break;
    case 6:
      formatPetsList(listsObject.list6);
      pageNumber.innerHTML = page;
      break;
    case 7:
      formatPetsList(listsObject.list7);
      pageNumber.innerHTML = page;
      buttonEnd.classList.remove('disable');
      buttonEnd.classList.add('active');
      buttonRight.classList.remove('disable');
      buttonRight.classList.add('active');
      break;
    case 8:
      formatPetsList(listsObject.list8);
      pageNumber.innerHTML = page;
      buttonEnd.classList.remove('active');
      buttonEnd.classList.add('disable');
      buttonRight.classList.remove('active');
      buttonRight.classList.add('disable');
      break;
    }
  } else if (window.innerWidth < 768){
    if(page === 16) {
      return;
    }

    deleteList();
    page++;

    switch (page) {
    case 1:
      formatPetsList(listsObject.list1);
      pageNumber.innerHTML = page;
      buttonStart.classList.remove('active');
      buttonStart.classList.add('disable');
      buttonLeft.classList.remove('active');
      buttonLeft.classList.add('disable');
      break;
    case 2:
      formatPetsList(listsObject.list2);
      pageNumber.innerHTML = page;
      buttonStart.classList.remove('disable');
      buttonStart.classList.add('active');
      buttonLeft.classList.remove('disable');
      buttonLeft.classList.add('active');
      break;
    case 3:
      formatPetsList(listsObject.list3);
      pageNumber.innerHTML = page;
      break;
    case 4:
      formatPetsList(listsObject.list4);
      pageNumber.innerHTML = page;
      break;
    case 5:
      formatPetsList(listsObject.list5);
      pageNumber.innerHTML = page;
      break;
    case 6:
      formatPetsList(listsObject.list6);
      pageNumber.innerHTML = page;
      break;
    case 7:
        formatPetsList(listsObject.list7);
        pageNumber.innerHTML = page;
        break;
    case 8:
        formatPetsList(listsObject.list8);
        pageNumber.innerHTML = page;
        break;
    case 9:
        formatPetsList(listsObject.list9);
        pageNumber.innerHTML = page;
        break;
    case 10:
        formatPetsList(listsObject.list10);
        pageNumber.innerHTML = page;
        break;
    case 11:
        formatPetsList(listsObject.list11);
        pageNumber.innerHTML = page;
        break;
    case 12:
        formatPetsList(listsObject.list12);
        pageNumber.innerHTML = page;
        break;
    case 13:
        formatPetsList(listsObject.list13);
        pageNumber.innerHTML = page;
        break;
    case 14:
        formatPetsList(listsObject.list14);
        pageNumber.innerHTML = page;
        break;
    case 15:
      formatPetsList(listsObject.list15);
      pageNumber.innerHTML = page;
      buttonEnd.classList.remove('disable');
      buttonEnd.classList.add('active');
      buttonRight.classList.remove('disable');
      buttonRight.classList.add('active');
      break;
    case 16:
      formatPetsList(listsObject.list16);
      pageNumber.innerHTML = page;
      buttonEnd.classList.remove('active');
      buttonEnd.classList.add('disable');
      buttonRight.classList.remove('active');
      buttonRight.classList.add('disable');
      break;
    }
  }
}

function shiftLeft() {

  if(window.innerWidth >= 1280) {
    if(page === 1) {
      return;
    }

    deleteList();
    page--;

    switch (page) {
    case 1:
      formatPetsList(listsObject.list1);
      console.log(listsObject.list1);
      pageNumber.innerHTML = page;
      buttonStart.classList.remove('active');
      buttonStart.classList.add('disable');
      buttonLeft.classList.remove('active');
      buttonLeft.classList.add('disable');
      break;
    case 2:
      formatPetsList(listsObject.list2);
      pageNumber.innerHTML = page;
      buttonStart.classList.remove('disable');
      buttonStart.classList.add('active');
      buttonLeft.classList.remove('disable');
      buttonLeft.classList.add('active');
      break;
    case 3:
      formatPetsList(listsObject.list3);
      pageNumber.innerHTML = page;
      break;
    case 4:
      formatPetsList(listsObject.list4);
      pageNumber.innerHTML = page;
      break;
    case 5:
      formatPetsList(listsObject.list5);
      buttonEnd.classList.remove('disable');
      buttonEnd.classList.add('active');
      buttonRight.classList.remove('disable');
      buttonRight.classList.add('active');
      pageNumber.innerHTML = page;
      break;
    case 6:
      formatPetsList(listsObject.list6);
      pageNumber.innerHTML = page;
      buttonEnd.classList.remove('active');
      buttonEnd.classList.add('disable');
      buttonRight.classList.remove('active');
      buttonRight.classList.add('disable');
      break;
    }
  } else if (window.innerWidth < 1280 && window.innerWidth >=768){

    if(page === 1) {
      return;
    }

    deleteList();
    page--;

    switch (page) {
    case 1:
      formatPetsList(listsObject.list1);
      pageNumber.innerHTML = page;
      buttonStart.classList.remove('active');
      buttonStart.classList.add('disable');
      buttonLeft.classList.remove('active');
      buttonLeft.classList.add('disable');
      break;
    case 2:
      formatPetsList(listsObject.list2);
      pageNumber.innerHTML = page;
      buttonStart.classList.remove('disable');
      buttonStart.classList.add('active');
      buttonLeft.classList.remove('disable');
      buttonLeft.classList.add('active');
      break;
    case 3:
      formatPetsList(listsObject.list3);
      pageNumber.innerHTML = page;
      break;
    case 4:
      formatPetsList(listsObject.list4);
      pageNumber.innerHTML = page;
      break;
    case 5:
      formatPetsList(listsObject.list5);
      pageNumber.innerHTML = page;
      break;
    case 6:
      formatPetsList(listsObject.list6);
      pageNumber.innerHTML = page;
      break;
    case 7:
      formatPetsList(listsObject.list7);
      pageNumber.innerHTML = page;
      buttonEnd.classList.remove('disable');
      buttonEnd.classList.add('active');
      buttonRight.classList.remove('disable');
      buttonRight.classList.add('active');
      break;
    case 8:
      formatPetsList(listsObject.list8);
      pageNumber.innerHTML = page;
      buttonEnd.classList.remove('active');
      buttonEnd.classList.add('disable');
      buttonRight.classList.remove('active');
      buttonRight.classList.add('disable');
      break;
    }
    } else if (window.innerWidth < 768){
    if(page === 1) {
      return;
    }

    deleteList();
    page--;

    switch (page) {
    case 1:
      formatPetsList(listsObject.list1);
      pageNumber.innerHTML = page;
      buttonStart.classList.remove('active');
      buttonStart.classList.add('disable');
      buttonLeft.classList.remove('active');
      buttonLeft.classList.add('disable');
      break;
    case 2:
      formatPetsList(listsObject.list2);
      pageNumber.innerHTML = page;
      buttonStart.classList.remove('disable');
      buttonStart.classList.add('active');
      buttonLeft.classList.remove('disable');
      buttonLeft.classList.add('active');
      break;
    case 3:
      formatPetsList(listsObject.list3);
      pageNumber.innerHTML = page;
      break;
    case 4:
      formatPetsList(listsObject.list4);
      pageNumber.innerHTML = page;
      break;
    case 5:
      formatPetsList(listsObject.list5);
      pageNumber.innerHTML = page;
      break;
    case 6:
      formatPetsList(listsObject.list6);
      pageNumber.innerHTML = page;
      break;
    case 7:
        formatPetsList(listsObject.list7);
        pageNumber.innerHTML = page;
        break;
    case 8:
        formatPetsList(listsObject.list8);
        pageNumber.innerHTML = page;
        break;
    case 9:
        formatPetsList(listsObject.list9);
        pageNumber.innerHTML = page;
        break;
    case 10:
        formatPetsList(listsObject.list10);
        pageNumber.innerHTML = page;
        break;
    case 11:
        formatPetsList(listsObject.list11);
        pageNumber.innerHTML = page;
        break;
    case 12:
        formatPetsList(listsObject.list12);
        pageNumber.innerHTML = page;
        break;
    case 13:
        formatPetsList(listsObject.list13);
        pageNumber.innerHTML = page;
        break;
    case 14:
        formatPetsList(listsObject.list14);
        pageNumber.innerHTML = page;
        break;
    case 15:
      formatPetsList(listsObject.list15);
      pageNumber.innerHTML = page;
      buttonEnd.classList.remove('disable');
      buttonEnd.classList.add('active');
      buttonRight.classList.remove('disable');
      buttonRight.classList.add('active');
      break;
    case 16:
      formatPetsList(listsObject.list16);
      pageNumber.innerHTML = page;
      buttonEnd.classList.remove('active');
      buttonEnd.classList.add('disable');
      buttonRight.classList.remove('active');
      buttonRight.classList.add('disable');
      break;
    }
  }
}




function deleteList() {
  document.querySelectorAll('.slider__card').forEach(elem => elem.remove());
}


function formatPetsList(list) {
  list.forEach(item => formatPetItem(item));
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

// Popup

slider.addEventListener('click', showPetsCard);


function showPetsCard(event) {

  let item = event.target.parentElement.dataset.id || event.target.dataset.id;

  let popapItem  = list.find(petsItem => petsItem.name == item);
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
