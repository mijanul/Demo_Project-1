import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';

export default class ServiceClient {
  client: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config);

    this.client.interceptors.request.use(
      // eslint-disable-next-line no-shadow
      async config => {
        axios
          .get(Config.API_BASE_URL)
          .then(_response => {})
          .catch(error => {
            console.error(error);
          });

        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    this.client.interceptors.response.use(
      response => {
        return response;
      },
      async error => {
        return Promise.reject(error);
      },
    );
  }

  get(endpoint: string) {
    return this.client.get<any>(endpoint);
  }

  post(endpoint: string, payload: any) {
    return this.client.post<any>(endpoint, payload);
  }

  put(endpoint: string, payload: any) {
    return this.client.put<any>(endpoint, payload);
  }

  delete(endpoint: string) {
    return this.client.delete<any>(endpoint);
  }

  patch(endpoint: string, payload: any) {
    return this.client.patch<any>(endpoint, payload);
  }
}
