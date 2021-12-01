import React from 'react';
import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '65df9cddd1msh1b632c179c457f1p17ea53jsn09d7b2ec7a00',
    },
  });
  return data;
};
