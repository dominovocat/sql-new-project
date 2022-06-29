import axios from 'axios';
import httpClient from './httpClient';


export const getProdList = async()=>{
  const responce = await httpClient.get('/products');
  const prodList = responce.date;

  return prodList;
};
