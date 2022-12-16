import axios from 'axios';

const BaseUrl = 'https://pixabay.com/api/';
const APIkey = '14585598-21e1bf9412731d0128a8b3ac3';
const per_page = 12;

export async function GetDataArr(search, page) {
  const res = await axios.get(
    `${BaseUrl}?key=${APIkey}&q=${search}&mage_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${page}`
  );
  return res.data.hits;
}
