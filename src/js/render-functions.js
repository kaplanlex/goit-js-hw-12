import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const g = document.querySelector("#gallery");
let box;
export function gallery(images) {
    const element = images
        .map(
            ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
            <a href="${largeImageURL}" class="gallery-item">
                <img src="${webformatURL}" alt="${tags}" />
                <div class="info">
                    <p>Likes: ${likes}</p>
                    <p>Views: ${views}</p>
                    <p>Comments: ${comments}</p>
                    <p>Downloads: ${downloads}</p>
                </div>
            </a>
        `)
        .join("");
    g.innerHTML += element;

    if (!box) {
        box = new SimpleLightbox(".gallery-item", {
            captionsData: "alt",
            captionDelay: 250,
        });
    } else {
        box.refresh();
    }
}

export function clear() {
    g.innerHTML = "";
}


export function loadMore(visible) {
    const button = document.querySelector("#load-more");
    if (visible) {
        button.classList.remove("hidden");
    } else {
        button.classList.add("hidden");
    }
}
