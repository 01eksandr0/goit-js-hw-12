import { fetchCart } from './feachCart';
import { createArrayElement } from './createArrayElement';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const listEl = document.querySelector('.list');
const loader = document.querySelector('.loader');
const btnNextEl = document.querySelector('.next');
const gallery = new SimpleLightbox('.list a');

export const thenCatch = searchParams => {
  fetchCart(searchParams)
    .then(response => {
      if (searchParams.page === Math.ceil(response.data.totalHits / 40)) {
        iziToast.error({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'center',
        });
        btnNextEl.style.display = 'none';
        loader.style.display = 'none';
      }
      return response.data;
    })
    .then(json => {
      const marcup = createArrayElement(json.hits);
      if (marcup.length < 1) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
        loader.style.display = 'none';
      } else {
        listEl.insertAdjacentHTML('beforeend', marcup.join(' '));
        if (searchParams.page < Math.ceil(json.totalHits / 40)) {
          btnNextEl.style.display = 'block';
        }

        loader.style.display = 'none';
        gallery.refresh();
        if (searchParams.page > 1) {
          window.scrollBy({
            top:
              2 *
              document.querySelector('.list-item').getBoundingClientRect()
                .height,
            behavior: 'smooth',
          });
        }
      }
    })
    .catch(err => {
      console.log(err);
    });
};
