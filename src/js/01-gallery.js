// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imgContainer = document.querySelector ('.gallery');
const imagesMarkup = createImgCardsMarkup(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', imagesMarkup);

const gallery = new SimpleLightbox(imgContainer.querySelectorAll('.gallery a'), {
    captionsData: 'alt'
    });
     

function createImgCardsMarkup (galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
    <img
      class = "gallery__image"
      src = "${preview}"
      data-source ="${original}"
      alt = "${description}"
    />
    </a>
    `;
    }).join('')
}
console.log(galleryItems);
