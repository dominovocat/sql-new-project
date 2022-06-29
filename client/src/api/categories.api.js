import httpClient from "./httpClient";

export const getCategList = async () => {
  const response = await httpClient.get('/products');
  const categList = response.data.data;

  return categList;
};