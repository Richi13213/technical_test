import axios, { AxiosResponse, AxiosError } from "axios";
import type { CreateUserInterface, BackendResponse } from "@typing/user";
import config from "@config";

export const createUser = async (
  user: CreateUserInterface
): Promise<boolean> => {
  try {
    const response: AxiosResponse<BackendResponse> =
      await axios.post<BackendResponse>(config.api_url, user, {
        headers: config.http_headers,
      });

    if (response.status === 200 && response.data.hasOwnProperty("msg")) {
      return true;
    } else {
      throw new Error("Unexpected response from server: Missing 'msg' field");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        if (
          axiosError.response.status === 400 ||
          axiosError.response.status === 405
        ) {
          throw new Error("Invalid input");
        } else {
          throw new Error("Server error");
        }
      } else if (axiosError.request) {
        throw new Error("Request error");
      } else {
        throw new Error("Unknown error");
      }
    } else {
      throw new Error("Network error");
    }
  }
};
