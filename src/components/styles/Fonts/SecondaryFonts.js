import * as baskerville from "../../../fonts/libre-baskerville"

const SecondaryFonts = `
  @font-face {
    font-family: "Libre Baskerville";
    font-style: normal;
    font-weight: 400;
    src:
      local("Libre Baskerville"),
      local("LibreBaskerville-Regular"),
      url('${baskerville.Baskerville400WOFF2}') format("woff2"),
      url('${baskerville.Baskerville400WOFF}') format("woff");
  }
  @font-face {
    font-family: "Libre Baskerville";
    font-style: italic;
    font-weight: 400;
    src:
      local("Libre Baskerville Italic"),
      local("LibreBaskerville-Italic"),
      url('${baskerville.Baskerville400ITALICWOFF2}') format("woff2"),
      url('${baskerville.Baskerville400ITALICWOFF}') format("woff");
  }
  @font-face {
    font-family: "Libre Baskerville";
    font-style: normal;
    font-weight: 700;
    src:
      local("Libre Baskerville Bold"),
      local("LibreBaskerville-Bold"),
      url('${baskerville.Baskerville700WOFF2}') format("woff2"),
      url('${baskerville.Baskerville700WOFF}') format("woff");
  }
`

export default SecondaryFonts
