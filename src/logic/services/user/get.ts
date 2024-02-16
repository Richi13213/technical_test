import axios, { AxiosResponse, AxiosError } from "axios";
import type { UserInterface } from "@typing/user";
import config from "@config";

export const getAllUsers = async (): Promise<UserInterface[]> => {
  try {
    const response: AxiosResponse<UserInterface[]> = await axios.get<
      UserInterface[]
    >(config.api_url, {
      headers: config.http_headers,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        throw new Error(`Server error: ${axiosError.response.status}`);
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
