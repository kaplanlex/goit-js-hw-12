import { back } from "./js/pixabay-api.js";
import { gallery, clear } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#search-form");
const loader = document.querySelector("#loader");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = event.target.elements.query.value.trim();
    if (!query) {
        iziToast.error({ message: "Please enter a correct query" });
        return;
    }

    clear();
    loader.classList.remove("hidden");

    back(query)
        .then((data) => {
            if (data.hits.length === 0) {
                iziToast.info({ message: "No images found" });
                return;
            }
            gallery(data.hits);
        })
        .catch((error) => {
            iziToast.error({ message: "Error fetching images. Please try again." });
        })
        .finally(() => {
            loader.classList.add("hidden");
        });
});
