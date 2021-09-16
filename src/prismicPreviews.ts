import {
  componentResolverFromMap,
  PrismicUnpublishedRepositoryConfigs,
} from "gatsby-plugin-prismic-previews";

import { linkResolver } from "./linkResolver";

import PageTemplate from "./templates/page";

export const repositoryConfigs: PrismicUnpublishedRepositoryConfigs = [
  {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: PageTemplate,
    }),
  },
];
