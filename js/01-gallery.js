import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const groupOfLiImages = document.createDocumentFragment();

const showImg = (e) => {
  if (e.target.nodeName != "IMG") {
    return;
  }
  const imgToShow = basicLightbox.create(
    `<img src = "${e.target.dataset.source}">`
  );
  imgToShow.show(() => {
    const closeWithEscape = (e) => {
      if (e.key == "Escape")
        imgToShow.close(() => {
          document.removeEventListener("keydown", closeWithEscape);
        });
    };
    document.addEventListener("keydown", closeWithEscape);
  });
};

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
  imgElemet.dataset.source = e.original;
  linkElement.append(imgElemet);
  liElement.append(linkElement);
  groupOfLiImages.append(liElement);
});

gallery.append(groupOfLiImages);

gallery.addEventListener("click", showImg);
