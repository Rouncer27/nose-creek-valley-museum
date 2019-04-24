import * as opensans from "../../../fonts/open-sans"

const PrimaryFonts = `
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src:
    local("Open Sans Light"),
    local("OpenSans-Light"),
    url('${opensans.OpenSans300WOFF2}') format("woff2"),
    url('${opensans.OpenSans300WOFF}') format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 300;
  src:
    local("Open Sans Light Italic"),
    local("OpenSans-LightItalic"),
    url('${opensans.OpenSans300ITALICWOFF2}') format("woff2"),
    url('${opensans.OpenSans300ITALICWOFF}') format("woff");
}


@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src:
    local("Open Sans Regular"),
    local("OpenSans-Regular"),
    url('${opensans.OpenSans400WOFF2}') format("woff2"),
    url('${opensans.OpenSans400WOFF}') format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 400;
  src:
    local("Open Sans Italic"),
    local("OpenSans-LightItalic"),
    url('${opensans.OpenSans400ITALICWOFF2}') format("woff2"),
    url('${opensans.OpenSans400ITALICWOFF}') format("woff");
}


@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  src:
    local("Open Sans SemiBold"),
    local("OpenSans-SemiBold"),
    url('${opensans.OpenSans600WOFF2}') format("woff2"),
    url('${opensans.OpenSans600WOFF}') format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 600;
  src:
    local("Open Sans SemiBold Italic"),
    local("OpenSans-SemiBoldItalic"),
    url('${opensans.OpenSans600ITALICWOFF2}') format("woff2"),
    url('${opensans.OpenSans600ITALICWOFF}') format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src:
    local("Open Sans Bold"),
    local("OpenSans-Bold"),
    url('${opensans.OpenSans700WOFF2}') format("woff2"),
    url('${opensans.OpenSans700WOFF}') format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 700;
  src:
    local("Open Sans Bold Italic"),
    local("OpenSans-BoldItalic"),
    url('${opensans.OpenSans700ITALICWOFF2}') format("woff2"),
    url('${opensans.OpenSans700ITALICWOFF}') format("woff");
}


@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  src:
    local("Open Sans ExtraBold"),
    local("OpenSans-ExtraBold"),
    url('${opensans.OpenSans800WOFF2}') format("woff2"),
    url('${opensans.OpenSans800WOFF}') format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 800;
  src:
    local("Open Sans ExtraBold Italic"),
    local("OpenSans-ExtraBoldItalic"),
    url('${opensans.OpenSans800ITALICWOFF2}') format("woff2"),
    url('${opensans.OpenSans800ITALICWOFF}') format("woff");
}

`

export default PrimaryFonts
