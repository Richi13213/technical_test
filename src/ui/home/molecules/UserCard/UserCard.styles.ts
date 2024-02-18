import { css, cx } from "@emotion/css";
import { flex } from "@mixins";

export const card = cx(
  flex({
    justify: "center",
    align: "center",
    gap: "15px",
  }),
  css`
    flex-direction: column;
    flex: 1 0 25%;
    background: #fff;
    border: 1px solid #acacac;
    border-radius: 8px;
    padding: 20px;
    min-height: fit-content;
  `
);
