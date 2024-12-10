import axios from "axios";

const API_KEY = "47378752-b657325f73b86ea506e5db7de";
const URL = "https://pixabay.com/api/";

export async function back(query, page = 1, perPage = 15) {


    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: perPage,
    };

    const answer = await axios.get(URL, { params });
    return answer.data;
}
