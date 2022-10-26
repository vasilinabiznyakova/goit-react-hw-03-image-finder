import axios from 'axios';

function fetchPictures(name, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '29465833-2a7a79fc7318dfcd77a5c91cc';

  return axios.get(
    `${BASE_URL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12
          &page=${page}`
  );
}

const api = {
  fetchPictures,
};

export default api;
