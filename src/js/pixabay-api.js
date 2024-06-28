import axios from 'axios';
axios.defaults.baseURL = "https://pixabay.com";
const API_KEY = "44363127-b4cd04443a44f0f2a63a731a6";



export default async function getImages(query, currentPage){
  const params = new URLSearchParams({
    key: API_KEY,
    q: query, 
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: currentPage,
    per_page: 15,
  });

  const response = await axios.get("/api/", { params });
  return response.data;
}
