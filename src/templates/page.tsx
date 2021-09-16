import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Helmet } from "react-helmet-async";
import { SliceZone } from "@prismicio/react";

import { PageTemplateQuery } from "../types.generated";
import { sliceZoneComponents } from "../slices/PageDataBody";

import { Layout } from "../components/Layout";

type PageTemplateProps = PageProps<PageTemplateQuery>;

const PageTemplate = ({ data, ...props }: PageTemplateProps) => {
  console.log({ data, props });

  return (
    <Layout>
      <Helmet>
        <title>{data.prismicPage?.data?.title?.text}</title>
      </Helmet>
      <SliceZone
        slices={data.prismicPage?.data.body}
        components={sliceZoneComponents}
      />
    </Layout>
  );
};

export default PageTemplate;

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
