import { css } from "@emotion/css";

import type {
  ForsizeConfig,
  FlexConfig,
  ContentConfig,
  Devices,
} from "@typing/styles";

import { medias } from "./vars";

export function forsize(queries: ForsizeConfig) {
  const devices = Object.keys(queries) as Devices[];
  const responsive = devices.map((key) =>
    medias[key]
      ? css`
          @media screen and (${medias[key]}) {
            ${queries[key]}
          }
        `
      : ""
  );
  return css`
    ${responsive}
  `;
}

export const flex = ({ justify, gap, align = "center" }: FlexConfig) => {
  const gapContent = gap ? `gap: ${gap};` : "";
  const alignContent = align ? `align-items: ${align};` : "";

  return css`
    display: flex;
    justify-content: ${justify};
    ${gapContent}
    ${alignContent}
  `;
};

export const content = ({
  width = "1500px",
  padding = "0 16px",
  margin = "0 auto",
}: ContentConfig) => css`
  display: block;
  width: 100%;
  max-width: ${width};
  margin: ${margin};
  padding: ${padding};
`;
