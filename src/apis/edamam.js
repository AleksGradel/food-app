import axios from "axios";

import config from "../config.js";

export default axios.create({
  baseURL: "https://api.edamam.com/api/recipes/v2",
  params: {
    type: "public",
    app_id: config.APPLICATION_ID,
    app_key: config.APPLICATION_KEYS,
  },
});
