import axios from 'axios';
const API_KEY = '49376461-7308a4eb46f734d3329281beb';

function getPhoto(searchPhoto) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: searchPhoto,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error loading images:', error);
      return [];
    });
}
export default getPhoto;
