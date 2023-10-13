import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const groupOfLiImages = document.createDocumentFragment();

galleryItems.forEach((e) => {
  const liElement = document.createElement("li");
  const imgElemet = document.createElement("img");
  const linkElement = document.createElement("a");
  liElement.classList.add("gallery__item");
  linkElement.classList.add("gallery__link");
  linkElement.href = e.original;
  linkElement.addEventListener("click", (evt) => evt.preventDefault());
  imgElemet.classList.add("gallery__image");
  imgElemet.src = e.preview;
  imgElemet.alt = e.description;
  linkElement.append(imgElemet);
  liElement.append(linkElement);
  groupOfLiImages.append(liElement);
});

gallery.append(groupOfLiImages);

new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
