import api from "./api";

export const fetchFlights = (params) => api.get("/flights/search", { params });
export const fetchBuses = (params) => api.get("/buses/search", { params });
export const fetchTrains = (params) => api.get("/trains/search", { params });
export const fetchHotels = () => api.get("/hotels");