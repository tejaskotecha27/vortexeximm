import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
});

export const fetchProducts = async () => {
  const { data } = await api.get('/products');
  return data;
};

export const fetchCategories = async () => {
  const { data } = await api.get('/categories');
  return data;
};

export const fetchProductsByCategory = async (category) => {
  const { data } = await api.get(`/products/category/${category}`);
  return data;
};

export const fetchProductById = async (id) => {
  const { data } = await api.get(`/product/${id}`);
  return data;
};

export const createOrder = async (orderData) => {
  const { data } = await api.post('/orders', orderData);
  return data;
};

export const submitInquiry = async (inquiryData) => {
  const { data } = await api.post('/inquiries', inquiryData);
  return data;
};

export default api;
