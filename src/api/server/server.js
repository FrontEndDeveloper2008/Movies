import { api } from "../index";
export const getSponsors = () => api.get("/sponsors");
export const getSponsor = (id) => api.get(`/sponsors/${id}`);
export const putSponsor = (id, data) => api.put(`/sponsors/${id}`, data);
export const getStudents = () => api.get("/StudentsData");
export const getStudent = (id) => api.get(`/StudentsData/${id}`);
export const putStudent = (id, data) => api.put(`/StudentsData/${id}`, data);
