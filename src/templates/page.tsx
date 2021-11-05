import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import { PageTemplateQuery } from "../types.generated";
import { repositoryConfigs } from "../prismicPreviews";

// TODO
import { PageDataBodySlice } from "../slices/PageDataBody";

// TODO
import { PageDataBodyFeature } from "../slices/PageDataBodyFeature";
import { PageDataBodyVideo } from "../slices/PageDataBodyVideo";
import { PageDataBodyInlineNavigation } from "../slices/PageDataBodyInlineNavigation";
import { PageDataBodyHeroFeature } from "../slices/PageDataBodyHeroFeature";

import { Layout } from "../components/Layout";

type PageTemplateProps = PageProps<PageTemplateQuery>;

const PageTemplate = ({ data }: PageTemplateProps) => {
  return (
    <Layout>
      <Helmet>
        <title>{data.prismicPage?.data?.title?.text}</title>
      </Helmet>
      {/* TODO */}
      {(data.prismicPage?.data?.body as PageDataBodySlice[]).map((slice) => {
        switch (slice.slice_type) {
          case "video": {
            return <PageDataBodyVideo slice={slice} />;
          }

          case "feature": {
            return <PageDataBodyFeature slice={slice} />;
          }

          case "hero_feature": {
            return <PageDataBodyHeroFeature slice={slice} />;
          }

          case "inline_navigation": {
            return <PageDataBodyInlineNavigation slice={slice} />;
          }

          default: {
            return null;
          }
        }
      })}
    </Layout>
  );
};

export default withPrismicPreview(PageTemplate, repositoryConfigs);

export const query = graphql`
  query PageTemplate($id: String!) {
    prismicPage(id: { eq: $id }) {
      _previewable
      data {
        title {
          text
        }
        body {
          ...SlicesPageDataBody
        }
      }
    }
  }
`;
