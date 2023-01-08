import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
// console.log(galleryItems);

const galleryMarkup = createGalleryItemMarkup(galleryItems);
function createGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  const imgOriginal = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `
		<img src="${imgOriginal}" width="800" height="600" >
	`
  );

  instance.show((instance) => console.log("finished show()", instance));
}
