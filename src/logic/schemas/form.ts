import {
  REQUIRED,
  ONLY_LETTERS_MESSAGE_ERROR,
  ONLY_NUMBERS_MESSAGE_ERROR,
  EMAIL_MESSAGE_ERROR,
  BIRTHDAY_MESSAGE_ERROR,
} from "@constants/form";
import {
  EMAIL_REGEX,
  ONLY_LETTERS_REGEX,
  BIRTHDAY_REGEX,
} from "@constants/regular_expressions";

import { object, string, number } from "yup";

export const userSchema = object({
  nombre: string()
    .matches(ONLY_LETTERS_REGEX, ONLY_LETTERS_MESSAGE_ERROR)
    .required(REQUIRED),
  apellidoPaterno: string()
    .matches(ONLY_LETTERS_REGEX, ONLY_LETTERS_MESSAGE_ERROR)
    .required(REQUIRED),
  apellidoMaterno: string()
    .matches(ONLY_LETTERS_REGEX, ONLY_LETTERS_MESSAGE_ERROR)
    .required(REQUIRED),
  edad: number().required(REQUIRED).integer(ONLY_NUMBERS_MESSAGE_ERROR),
  email: string().matches(EMAIL_REGEX, EMAIL_MESSAGE_ERROR).required(REQUIRED),
  fechaNac: string()
    .matches(BIRTHDAY_REGEX, BIRTHDAY_MESSAGE_ERROR)
    .required(REQUIRED),
  calle: string()
    .matches(ONLY_LETTERS_REGEX, ONLY_LETTERS_MESSAGE_ERROR)
    .required(REQUIRED),
  numero: number().required(REQUIRED).integer(ONLY_NUMBERS_MESSAGE_ERROR),
  colonia: string()
    .matches(ONLY_LETTERS_REGEX, ONLY_LETTERS_MESSAGE_ERROR)
    .required(REQUIRED),
  delegacion: string()
    .matches(ONLY_LETTERS_REGEX, ONLY_LETTERS_MESSAGE_ERROR)
    .required(REQUIRED),
  estado: string()
    .matches(ONLY_LETTERS_REGEX, ONLY_LETTERS_MESSAGE_ERROR)
    .required(REQUIRED),
  cp: number().required(REQUIRED).integer(ONLY_NUMBERS_MESSAGE_ERROR),
  imagen: string().required(REQUIRED),
});
