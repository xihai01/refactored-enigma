import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 7n9AEY-JBwLx7p2L82rbkaVyAsOLFwc3KykexOEasLt2qeq5V1UV_JqTWO3ZXj8AOdYaUe97vW1a7EQoDmSVpuxjo1sKd5Mjr1xJnvIg9t3CNeS-AHNIOT2M9jxHYnYx",
  },
});
