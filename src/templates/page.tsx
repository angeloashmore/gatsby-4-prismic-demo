import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { SliceZone } from "@prismicio/react";

import { PageTemplateQuery } from "../types.generated";

import { sliceZoneComponents } from "../slices/PageDataBody";

type PageTemplateProps = PageProps<PageTemplateQuery>;

const PageTemplate = ({ data, ...props }: PageTemplateProps) => {
  console.log({ data, props });

  return (
    <SliceZone
      slices={data.prismicPage?.data.body}
      components={sliceZoneComponents}
    />
  );
};

export default PageTemplate;

export const query = graphql`
  query PageTemplate($id: String!) {
    prismicPage(id: { eq: $id }) {
      _previewable
      data {
        body {
          ...SlicesPageDataBody
        }
      }
    }
  }
`;
