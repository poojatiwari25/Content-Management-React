import axios from "axios";

const API_BASE_URL = "http://localhost:5000/contents";

export const getContents = () => axios.get(API_BASE_URL);
export const createContent = (data) => axios.post(API_BASE_URL, data);
export const updateContent = (id, data) => axios.put(`${API_BASE_URL}/${id}`, data);
export const deleteContent = (id) => axios.delete(`${API_BASE_URL}/${id}`);
