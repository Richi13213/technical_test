import axios, { AxiosResponse, AxiosError } from "axios";
import type { CreateUserInterface, BackendResponse } from "@typing/user";
import config from "@config";

export const createUserService = async (
  user: CreateUserInterface
): Promise<boolean> => {
  try {
    const { nombre, apellidoPaterno, apellidoMaterno, edad, email, fechaNac } =
      user;
    const createUserData = JSON.stringify({
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      edad,
      email,
      fechaNac,
      datos: `{\"calle\": \"${user.calle}\",\"numero\": \"${user.numero}\",\"colonia\": \"${user.colonia}\",\"delegacion\": \"${user.delegacion}\",\"estado\": \"${user.estado}\",\"cp\": \"${user.cp}\",\"imagen\": \"${user.imagen}\"}`
    });
    const response: AxiosResponse<BackendResponse> =
      await axios.post<BackendResponse>(config.api_url, createUserData, {
        headers: config.http_headers,
      });

    if (response.status === 200 && response.data.hasOwnProperty("id")) {
      return true;
    } else {
      console.log("Unexpected response from server");
      return false;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        if (
          axiosError.response.status === 400 ||
          axiosError.response.status === 405
        ) {
          console.log("Invalid input");
          return false;
        } else {
          console.log("Server error");
          return false;
        }
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