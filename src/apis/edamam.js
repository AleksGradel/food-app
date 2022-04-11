import axios from "axios";

const APPLICATION_ID = 'b36f18ec';
const APPLICATION_KEYS = '83a1bc47c35635f88b1856efc11ac1d7';

export default axios.create({
    baseURL: 'https://api.edamam.com/api/recipes/v2',
    params: {
        // q: 'chicken',
        type: 'public',
        app_id: APPLICATION_ID,
        app_key: APPLICATION_KEYS
    }
});
