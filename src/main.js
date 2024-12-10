import { back } from "./js/pixabay-api.js";
import { gallery, clear, loadMore } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
let query = "";
let page = 1;
let perPage = 15;
const form = document.querySelector("#search-form");
const loader = document.querySelector("#loader");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    query = event.target.elements.query.value.trim();
    if (!query) {
        iziToast.error({ message: "Please enter a correct query" });
        return;
    }
    page = 1;
    clear();
    loadMore(false);
    loader.classList.remove("hidden");



    back(query, page, perPage)
        .then((data) => {
            if (data.hits.length === 0) {
                iziToast.info({ message: "No images found" });
                return;
            }
            gallery(data.hits);
            if (data.totalHits > page * perPage) {
                loadMore(true);
            }
        })
        .catch((error) => {
            iziToast.error({ message: "Error fetching images. Please try again." });
        })
        .finally(() => {
            loader.classList.add("hidden");
        });
});

const loadMoreButton = document.querySelector("#load-more");

loadMoreButton.addEventListener("click", () => {
    page++;
    loadMore(false);

    back(query, page, perPage)
        .then((data) => {
            gallery(data.hits);

            if (perPage * page >= data.totalHits) {
                loadMore(false);
                iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
            } else {
                loadMore(true);
            }

            const { height: cardHeight } = document.querySelector(".gallery-item").getBoundingClientRect();
            window.scrollBy({
                top: cardHeight * 2,
                behavior: "smooth",
            });
        })
        .catch((error) => {
            iziToast.error({ message: "Error fetching images. Please try again." });
        });
});
