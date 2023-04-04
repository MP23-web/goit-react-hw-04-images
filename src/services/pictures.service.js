import axios from 'axios';

const picturesService = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    key: '32580300-3b602abf8e552903b917d5f11',
  },
});

export const getPictures = async (q, page) => {
  const { data } = await picturesService.get('', {
    params: { q, page },
  });
  return data;
};