import * as React from "react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import { PrismicProvider } from "@prismicio/react";

import { Link } from "./src/components/Link";
import { linkResolver } from "./src/linkResolver";
import { repositoryConfigs } from "./src/prismicPreviews";

import "./src/index.css";

// Adds a shared React Context for Prismic preview sessions.
export const wrapRootElement = ({ element }) => (
  <PrismicProvider internalLinkComponent={Link} linkResolver={linkResolver}>
    <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
);
