import { css, cx } from "@emotion/css";

export const label = (weight: string | number): string =>
  cx(
    css`
      font-weight: ${weight};
      font-size: 18px;
      text-align: center;
    `
  );
