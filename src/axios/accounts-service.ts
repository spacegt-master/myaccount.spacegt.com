import axios from "axios";
import spacegt from "spacegt";

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_ACCOUNTS_SERVICE,
  withCredentials: false,
});

service.interceptors.request.use(
  (config) => {
    const authorizationStore = spacegt.stores.useAuthorizationStore();
    config.headers[authorizationStore.head] = authorizationStore.getFullToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (
      error.status === 403 &&
      error.response.headers["content-type"] === "application/problem+json"
    ) {
    }
    return Promise.reject(error);
  }
);

export default service;
