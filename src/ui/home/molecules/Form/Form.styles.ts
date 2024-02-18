import { css, cx } from "@emotion/css";
import { flex } from "@mixins";
import * as responsive from "./Form.styles.responsive";

export const form: string = cx(
  css`
    width: 100%;
    max-width: 900px;
    max-height: 80%;
    display: grid;
    place-items: center;
    padding: 20px;
    position: relative;
    background: #fff;
    border-radius: 10px;
    overflow-y: scroll;
    row-gap: 20px;
  `
);

export const modal: string = cx(
  flex({
    justify: "center",
    align: "center",
    gap: "10px",
  }),
  css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.7);
  `
);

export const response_text: string = cx(
  css`
    font-size: 30px;
    color: #fff;
    font-weight: bold;
  `
);

export const personal_info: string = cx(
  flex({
    justify: "center",
    align: "stretch",
    gap: "10px",
  }),
  css`
    width: 100%;
    flex-flow: wrap;
  `
);

export const addres_info: string = cx(
  flex({
    justify: "center",
    align: "stretch",
    gap: "10px",
  }),
  css`
    width: 100%;
    flex-flow: wrap;
  `
);

export const input_container: string = cx(
  css`
    flex: 1 0 13rem;
    flex-direction: column;
  `
);

export const title: string = cx(
  css`
    width: 100%;
    font-size: 24px;
    font-weight: bold;
  `,
  responsive.title
);

export const photo_container: string = cx(
  flex({
    justify: "center",
    align: "center",
    gap: "10px",
  }),
  css`
    width: 100%;
    flex-direction: column;
  `
);

export const user_image: string = cx(
  css`
    width: 100%;
    max-width: 100px;
    height: 100%;
    max-height: 100px;
  `
);

export const webcam_container: string = cx(
  flex({
    justify: "center",
    align: "center",
    gap: "10px",
  }),
  css`
    width: 100%;
    height: 100%;
    position: fixed;
    flex-direction: column;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.7);
  `
);

export const submit: string = cx(
  css`
    width: 100%;
    max-width: 200px;
  `
);
export const close_button: string = cx(
  flex({
    justify: "center",
    align: "center",
  }),
  css`
    border-radius: 50%;
    position: absolute;
    right: 8px;
    top: 8px;
  `
);
