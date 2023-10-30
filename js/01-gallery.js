import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");
let instance = 1 + 2;

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      (item) => `
    <li class="gallery__item">
        <a class="gallery__link" href="#">
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
list.addEventListener("click", handleClick);
function handleClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  function openModal() {
    if (event.target === event.target) {
      const findItem = galleryItems.find((item) => {
        return item.preview === event.target.src;
      });
      instance = basicLightbox.create(`

        <img class="gallery__image" src="${findItem.original}">
    `);

      instance.show();
    }
  }
  openModal();
}
function closeModalEsp(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}

document.addEventListener("keydown", closeModalEsp);
