import { css, cx } from "@emotion/css";
import { flex } from "@mixins";
import * as responsive from "./Dashboard.styles.responsive";

export const container: string = cx(
  flex({
    justify: "center",
    align: "center",
    gap: "25px",
  }),
  css`
    width: 100%;
    padding: 30px;
  `
);

export const head_container: string = cx(
  flex({
    justify: "space-between",
    align: "center",
    gap: "25px",
  }),
  css`
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    padding: 30px;
    background-color: #fff;
    border-bottom: 2px solid #acacac;
    flex-wrap: wrap;
  `
);

export const head_title: string = cx(
  css`
    font-size: 25px;
    font-weight: bold;
  `
);

export const actions: string = cx(
  flex({
    justify: "center",
    align: "center",
    gap: "10px",
  }),
  css``
);

export const modal: string = cx(
  css`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 20px;
    background: rgb(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    z-index: 999;
    overflow-y: scroll;
  `
);

export const user_list_container: string = cx(
  flex({
    justify: "center",
    align: "stretch",
    gap: "15px",
  }),
  css`
    width: 100%;
    flex-flow: wrap;
  `
);

export const input: string = cx(
  css`
    flex: 1 0 8rem;
  `
);

export const row_container: string = cx(
  flex({
    justify: "center",
    align: "stretch",
    gap: "5px",
  }),
  css`
    width: 100%;
    flex-flow: wrap;
    flex: 1 0 fit-content;
  `
);

export const column_container: string = cx(
  flex({
    justify: "center",
    align: "center",
    gap: "5px",
  }),
  css`
    flex-direction: column;
    flex: 1 0 30%;
  `
);
