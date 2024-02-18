import { css, cx } from "@emotion/css";
import * as responsive from "./Input.styles.responsive";

export const input: string = cx(
  css`
    width: 100%;
    padding: 8px;
    border: 1px solid var(--text-color);
    border-radius: 6px;
  `
);
