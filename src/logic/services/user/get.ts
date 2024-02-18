import axios, { AxiosResponse, AxiosError } from "axios";
import type { UserListInterface } from "@typing/user";
import config from "@config";

export const getAllUsers = async (): Promise<UserListInterface[] | boolean> => {
  try {
    const response: AxiosResponse<UserListInterface[]> = await axios.get<
      UserListInterface[]
    >(config.api_url, {
      headers: config.http_headers,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        console.log(`Server error: ${axiosError.response.status}`);
        return false;
      } else if (axiosError.request) {
        console.log("Request error");
        return false;
      } else {
        console.log("Unknown error");
        return false;
      }
    } else {
      console.log("Network error");
      return false;
    }
  }
};
