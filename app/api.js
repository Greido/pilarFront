import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

// Agregar un interceptor para incluir el JWT en las solicitudes
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token"); // Asegúrate de que 'jwt' es el nombre de la cookie donde almacenas tu JWT
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
