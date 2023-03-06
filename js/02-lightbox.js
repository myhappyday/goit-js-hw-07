import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeGallery = (image) => {
  const { preview, original, description } = image;
  return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
};

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map(makeGallery).join("");

galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

console.log(galleryItems);
