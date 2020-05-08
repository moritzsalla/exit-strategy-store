import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { Black, White, Orange } from "../components/variables"

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Suisse";
  src: url("/fonts/SuisseIntl-Regular-WebXL.woff2") format("woff2"),
    url("/fonts/SuisseIntl-Regular-WebXL.woff") format("woff");
  font-display: swap;
  font-weight: 500;
}

@font-face {
  font-family: "Suisse";
  src: url("/fonts/SuisseIntl-Bold-WebXL.woff2") format("woff2"),
    url("/fonts/SuisseIntl-Bold-WebXL.woff") format("woff");
  font-display: swap;
  font-weight: 900;
}

@font-face {
  font-family: "Suisse Mono";
  src: url("/fonts/SuisseIntlMono-Regular-WebXL.woff2") format("woff2"),
    url("/fonts/SuisseIntlMono-Regular-WebXL.woff") format("woff");
  font-display: swap;
  font-weight: 500;
}

::selection {
  background: ${Orange};
  color: ${Black};
}

html {
  background: ${Black};
}

body {
  background: ${White};
}
`
export default GlobalStyle
