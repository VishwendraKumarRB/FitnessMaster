import axios from 'axios';

import {ApiKey} from '../src/constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com';
const apiCall = async (url, params) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'x-rapidapi-key': ApiKey,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log('error', err.message);
  }
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
  let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
//   console.log("data",data)
  return data;
};
