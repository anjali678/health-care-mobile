import axios, { AxiosRequestConfig } from "axios";
import * as SecureStore from "expo-secure-store";

const instance = axios.create({
  baseURL: "https://bde8-101-2-181-99.ap.ngrok.io",
  headers: {
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    const token = await SecureStore.getItemAsync("user-token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
