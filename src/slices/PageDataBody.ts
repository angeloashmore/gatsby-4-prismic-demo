import { graphql } from "gatsby";

import { PageDataBodyFeature } from "./PageDataBodyFeature";
import { PageDataBodyVideo } from "./PageDataBodyVideo";
import { PageDataBodyInlineNavigation } from "./PageDataBodyInlineNavigation";
import { PageDataBodyHeroFeature } from "./PageDataBodyHeroFeature";

export const sliceZoneComponents = {
  feature: PageDataBodyFeature,
  video: PageDataBodyVideo,
  inline_navigation: PageDataBodyInlineNavigation,
  hero_feature: PageDataBodyHeroFeature,
};

export const fragment = graphql`
  fragment SlicesPageDataBody on PrismicPageDataBodySlicesType {
    ...PageDataBodyFeature
    ...PageDataBodyVideo
    ...PageDataBodyInlineNavigation
    ...PageDataBodyHeroFeature
  }
`;
