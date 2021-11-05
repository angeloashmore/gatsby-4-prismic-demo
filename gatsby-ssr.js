import * as React from "react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";

import "gatsby-plugin-prismic-previews/dist/styles.css";
import "./src/index.css";

// Adds a shared React Context for Prismic preview sessions.
export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
);
