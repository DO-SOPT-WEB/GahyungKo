import { css } from "styled-components";

const colors = {
    green: "#2c5530",
    red: "#b60017",
    darkRed: "#52000a",
    white: "#faf8f8",
    beige: "#f2e8cf"
};

const fonts = {
    title: css`
      font-family: Bagel Fat One;
      font-size: 2.5rem;
      font-weight: 500;
    `,
    subtitle: css`
      font-family: Orbit;
      font-size: 1.6rem;
      font-weight: 600;
    `,
    content: css`
      font-family: Orbit;
      font-size: 1rem;
      font-weight: 500;
    `,
  };

const theme = {
    colors, fonts
};

export default theme;