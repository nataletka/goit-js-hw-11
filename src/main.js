import getPhoto from './js/pixabay-api';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('input[name = "search-text"]');
const loader = document.querySelector('.loader');
form.addEventListener('submit', findFoto);
function findFoto(event) {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    iziToast.info({
      title: 'Hello',
      message: 'Please enter your query',
    });

    return;
  }
  loader.classList.remove('hidden');
  getPhoto(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Sorry',
          message:
            'there are no images matching your search query. Please try again!',
        });
        return;
      }
      renderGallery(data.hits);
      input.value = '';
    })
    .catch(error => {
      console.log('Failed to fetch images. Try again later!', error);
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
}
