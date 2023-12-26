import axios from 'axios';
export const fetchCart = async searchParams => {
  const response = await axios.get(`https://pixabay.com/api/`, {
    params: searchParams,
  });
  return response;
};
