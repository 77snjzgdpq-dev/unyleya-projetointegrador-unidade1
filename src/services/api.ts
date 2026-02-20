import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "https://api-projeto-integrador.vercel.app/",
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let message = "Erro inesperado. Tente novamente.";

    if (error.response) {
      const status = error.response.status;

      if (error.response.data?.message) {
        message = error.response.data.message;
      } else {
        switch (status) {
          case 400:
            message = "Requisição inválida.";
            break;
          case 401:
            message = "Não autorizado. Faça login novamente.";
            break;
          case 403:
            message = "Acesso negado.";
            break;
          case 404:
            message = "Recurso não encontrado.";
            break;
          case 500:
            message = "Erro interno do servidor.";
            break;
          default:
            message = "Erro ao se comunicar com o servidor.";
        }
      }
    } 
    else if (error.request) {
      message = "Servidor não respondeu. Verifique sua conexão.";
    }

    toast.error(message);

    return Promise.reject(error);
  }
);

export default api;