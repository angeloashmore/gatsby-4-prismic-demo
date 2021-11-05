import { PrismicRepositoryConfigs } from "gatsby-plugin-prismic-previews";

import { linkResolver } from "./linkResolver";

export const repositoryConfigs: PrismicRepositoryConfigs = [
  {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
    linkResolver,
  },
];
