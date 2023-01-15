import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup()

function createGalleryMarkup() {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("")
}

galleryRef.innerHTML = galleryMarkup

const lightbox = new SimpleLightbox('.gallery a', { captions: true, captionSelector: 'img', captionType: 'attr', captionsData: "alt", captionDelay: 250});