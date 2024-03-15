import axios from "axios";
import mem from 'memoize';
import{ AxiosError, AxiosResponse} from 'axios';

const useApiPBClient = () => {
  interface BackendResponse {
    data: any;
    unauthorized: boolean;
    error: any;
  }

  const refreshTokenFn = async () => {
    const refreshToken = localStorage.getItem('refresh-token')

    await axios
      .post("/user/refresh", { refreshToken })
      .then((response: AxiosResponse) => {
        const data = response.data

        localStorage.setItem('token', data['token'])
        localStorage.setItem('refresh-token', data['refresh-token'])
      })
      .catch((error: AxiosError) => {
        localStorage.clear()
        return Promise.reject(error)
      });
  }

  const maxAge = 10000 //メモ化している時間
  const memoizedRefreshToken = mem(refreshTokenFn, { maxAge });

  // get access token
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/octet-stream",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const get = async (
    url: string,
    params?: Record<string, any>,
  ): Promise<BackendResponse> => {
    return await axios
      .get(process.env.NEXT_PUBLIC_BACKEND_DOMAIN + url, { params, headers })
      .then((resp) => {
        if (resp.status < 210) {
          return { data: resp.data, unauthorized: false, error: null };
        }
        if (resp.status === 401) {
          memoizedRefreshToken();
          return { data: null, unauthorized: true, error: resp.status };
        }
        return { data: null, unauthorized: false, error: resp.statusText };
      });
  };

  const put = async (url: string, body: any): Promise<BackendResponse> => {
    return await axios
      .put(process.env.NEXT_PUBLIC_BACKEND_DOMAIN + url, body, { headers })
      .then((resp) => {
        if (resp.status < 210) {
          return { data: resp.data, unauthorized: false, error: null };
        }
        if (resp.status === 401) {
          return { data: null, unauthorized: true, error: resp.status };
        }
        return { data: null, unauthorized: false, error: resp.statusText };
      });
  };

  const post = async (url: string, body: any): Promise<BackendResponse> => {
    return await axios
      .post(process.env.NEXT_PUBLIC_BACKEND_DOMAIN + url, body, { headers })
      .then((resp) => {
        if (resp.status < 210) {
          return { data: resp.data, unauthorized: false, error: null };
        }
        if (resp.status === 401) {
          return { data: null, unauthorized: true, error: resp.status };
        }
        return { data: null, unauthorized: false, error: resp.statusText };
      });
  };
  return { get, put, post };
};

export default useApiPBClient;
