import axios, { AxiosInstance } from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const botApiClient: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

export const post = async <T, S>(url: string, payload: T) => {
  return await botApiClient.post<S>(url, { ...payload });
};

export const get = async<T>(url: string) => {
    return await botApiClient.get<T>(url);
};

export const postRequest = async <T, S>(
  url: string,
  payload: T,
  token: string
) => {
  try {
    botApiClient.defaults.headers.common.Authorization = token.startsWith(
      "Bearer"
    )
      ? token
      : `Bearer ${token}`;
    botApiClient.defaults.headers.post["Content-Type"] = "application/json";
    botApiClient.defaults.headers.common["Content-Type"] == "application/json";

    const response = await botApiClient.post<S>(url, { ...payload });

    return response.data;
  } catch (error) {
    console.log("Error making POST request", error);

  }
};


export const getRequest = async <T>(url: string, token: string) => {
  try {
    botApiClient.defaults.headers.common.Authorization = token.startsWith(
      "Bearer"
    )
      ? token
      : `Bearer ${token}`;
    botApiClient.defaults.headers.common["Content-Type"] == "application/json";

    const response = await botApiClient.get<T>(url);
    return response.data;
  } catch (error) {
    console.log("Error making GET request", error);
  }
};

//put method

//delete method
