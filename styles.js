const text = {
  muted: `color: #A9A9A9;`,
  mutedLight: `color: #D7D7D7;`,
  light: `color: #FFFFFF;`
}

export default {
  fullBackground: `
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,
  backgroundGradient: `
    background-color: #141415;
    background-image: radial-gradient(50% 50% at 50% 50%, #212432 40.1%, #141415 100%);
  `,
  inputReset: `
    display: block;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: inherit;
  `,
  grid: `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  `,
  thicc: `transform: scale(1.1);`,
  notThicc: `transform: scale(1);`,
  thiccable: `transition: transform 200ms ease;`,
  font: `font-family: 'Karla', sans-serif;`,
  biggerText: `font-size: 1.375rem;`,
  surface: `
    background: #323640;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    padding: 22px;
    ${text.light}
  `,
  text
}