import axios from 'axios';

const FetchImagesWithQuery = (searchQuery, page = 0, apiKey = '17718415-abf6596e447b0ee9bedcd0b67') =>{
    return axios
     .get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits);
}


export default {
    FetchImagesWithQuery,
}
