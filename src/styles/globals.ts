import { css } from "@emotion/react";
export const globals = css`
  * {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
    color: var(--text-color);
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
  :root {
    --accent-color: rgba(74,144,226,1);
    --accent-color-hover: rgba(74,144,226, 5);
    --text-color: rgba(74,74,74,1);
    --text-white: #fff;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  button {
    border: none;
  }
  a,
  button {
    background-color: var(--accent-color);
    border-color: var(--accent-color);
    color: var(--text-white);
    padding: 10px;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
      transition: all 0.1s linear;
      background-color: var(--accent-color-hover);
    }
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  }
  input[type=number] {
    -moz-appearance: textfield; 
  }
  .spinner {
    background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
    width: 100px;
    height: 100px;
    animation: spinning82341 1.7s linear infinite;
    text-align: center;
    border-radius: 50px;
    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
  }

  .spinner1 {
    background-color: rgb(36, 36, 36);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    filter: blur(10px);
  }

  @keyframes spinning82341 {
    to {
      transform: rotate(360deg);
    }
  }
`;
