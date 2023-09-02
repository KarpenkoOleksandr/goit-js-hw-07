import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
      <a class="gallery__link" href="${original}"
        ><img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
      /></a>
    </li>`;
    });
}
container.insertAdjacentHTML('beforeend', markup.join(''));
// console.log(galleryItems);
container.addEventListener('click', onImgClick);

function onImgClick(evt) {
    evt.preventDefault();
    const dataSource = evt.target.dataset.source;
    if (!dataSource)
        return;
    instance.element().querySelector('img').src = dataSource;
  instance.show();
}
 
const instance = basicLightbox.create(
  `
<img width="1080" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function onEscKeyPress(evt) {
  if (evt.code !== 'Escape') return;
  instance.close();
}

