import { thenCatch } from './js/thenCatch';
const loader = document.querySelector('.loader');
const formEl = document.querySelector('.form');
const listEl = document.querySelector('.list');
const btnNextEl = document.querySelector('.next');

const searchParams = {
  key: '41368993-aecccf11b76826fadfd0039f8',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
  page: 1,
};
const formSubmit = event => {
  event.preventDefault();
  btnNextEl.style.display = 'none';
  if (listEl.children.length > 0) listEl.innerHTML = '';
  loader.style.display = 'inline-block';
  searchParams.q = formEl.search.value;
  searchParams.page = 1;
  formEl.reset();
  thenCatch(searchParams);
};
const nextElements = () => {
  loader.style.display = 'inline-block';
  searchParams.page++;
  thenCatch(searchParams);

  /*  0,
    2 * document.querySelector('.list-item').getBoundingClientRect().height,
    { behavior: 'smooth' }*/
};

formEl.addEventListener('submit', formSubmit);
btnNextEl.addEventListener('click', nextElements);
