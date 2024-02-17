import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";

const interceptor = axios.create();

interceptor.interceptors.request.use(
  (config) => {
    // Do something before request is sent

    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
interceptor.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("accessToken");
      // location.href = "/main";
      toast.error("Login required");
    }

    throw error;
  },
);

export const apiGetter = async <T>(
  path: string,
  config?: any,
): Promise<AxiosResponse<T>> => {
  return await interceptor.get(import.meta.env.VITE_DOMAIN + path, config);
};

export const apiPoster = async <T>(
  path: string,
  data?: any,
): Promise<AxiosResponse<T>> => {
  return await interceptor.post(import.meta.env.VITE_DOMAIN + path, data);
};

export const apiPutter = async <T>(
  path: string,
  data?: any,
): Promise<AxiosResponse<T>> => {
  return await interceptor.put(import.meta.env.VITE_DOMAIN + path, data);
};

export const apiPatcher = async <T>(
  path: string,
  data?: any,
): Promise<AxiosResponse<T>> => {
  return await interceptor.patch(import.meta.env.VITE_DOMAIN + path, data);
};

export const apiDeleter = async <T>(
  path: string,
  data?: any,
): Promise<AxiosResponse<T>> => {
  return await interceptor.delete(import.meta.env.VITE_DOMAIN + path, data);
};
