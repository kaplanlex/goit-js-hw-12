import axios from "axios";

const API_KEY = "47378752-b657325f73b86ea506e5db7de";
const URL = "https://pixabay.com/api/";

export function back(query) {
    return axios
        .get(URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
            },
        })
        .then(response => response.data)
        .catch((error) => {
            console.error("Error fetch:", error);
            throw error;
        });

}
