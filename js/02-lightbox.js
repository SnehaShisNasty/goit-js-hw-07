import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      (item) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}"  data-title="123" ">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="large-image.jpg"
            alt="${item.description}"
            />
        </a>
    </li>
  `
    )
    .join("");
}
const lightbox = new SimpleLightbox(".gallery .gallery__link", {
  captions: false,
});
lightbox.open();
