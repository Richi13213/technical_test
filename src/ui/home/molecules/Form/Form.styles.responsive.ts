import { css, cx } from "@emotion/css";
import { forsize } from "@mixins";

export const title: string = cx(
  forsize({
    "phone-xbig": css`
      font-size: 18px;
    `,
  })
);
