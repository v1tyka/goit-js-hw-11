import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery'); // контейнер у DOM
const loader = document.querySelector('.loader'); // елемент завантажувача

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function galleryTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <ul class="gallery-sublist">
        <li class="gallery-subitem"><p class="sub-text">Likes</p><p class="sub-value">${likes}</p></li>
        <li class="gallery-subitem"><p class="sub-text">Views</p><p class="sub-value">${views}</p></li>
        <li class="gallery-subitem"><p class="sub-text">Comments</p><p class="sub-value">${comments}</p></li>
        <li class="gallery-subitem"><p class="sub-text">Downloads</p><p class="sub-value">${downloads}</p></li>
      </ul>
    </li>`;
}

export function markupRender(data) {
  return data.map(galleryTemplate).join('');
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function renderGallery(data) {
  const markup = markupRender(data);
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
