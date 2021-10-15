import { graphql } from "gatsby";

import {
  PageDataBodyFeature,
  PageDataBodyFeatureSlice,
} from "./PageDataBodyFeature";
import { PageDataBodyVideo, PageDataBodyVideoSlice } from "./PageDataBodyVideo";
import {
  PageDataBodyInlineNavigation,
  PageDataBodyInlineNavigationSlice,
} from "./PageDataBodyInlineNavigation";
import {
  PageDataBodyHeroFeature,
  PageDataBodyHeroFeatureSlice,
} from "./PageDataBodyHeroFeature";

export const sliceZoneComponents = {
  feature: PageDataBodyFeature,
  video: PageDataBodyVideo,
  inline_navigation: PageDataBodyInlineNavigation,
  hero_feature: PageDataBodyHeroFeature,
};

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
