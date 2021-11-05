import { graphql } from "gatsby";

import { PageDataBodyFeatureSlice } from "./PageDataBodyFeature";
import { PageDataBodyVideoSlice } from "./PageDataBodyVideo";
import { PageDataBodyInlineNavigationSlice } from "./PageDataBodyInlineNavigation";
import { PageDataBodyHeroFeatureSlice } from "./PageDataBodyHeroFeature";

// TODO: Add slice map

export type PageDataBodySlice =
  | PageDataBodyFeatureSlice
  | PageDataBodyVideoSlice
  | PageDataBodyInlineNavigationSlice
  | PageDataBodyHeroFeatureSlice;

export const fragment = graphql`
  fragment SlicesPageDataBody on PrismicPageDataBodySlicesType {
    ...PageDataBodyFeature
    ...PageDataBodyVideo
    ...PageDataBodyInlineNavigation
    ...PageDataBodyHeroFeature
  }
`;
