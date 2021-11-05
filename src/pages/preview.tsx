import * as React from "react";
import { navigate, PageProps } from "gatsby";
import {
  withPrismicPreviewResolver,
  WithPrismicPreviewResolverProps,
} from "gatsby-plugin-prismic-previews";

// TODO
import { repositoryConfigs } from "../prismicPreviews";

type PreviewPageProps = PageProps & WithPrismicPreviewResolverProps;

const PreviewPage = ({ isPrismicPreview }: PreviewPageProps): JSX.Element => {
  React.useEffect(() => {
    // If a visitor lands on this page and they did not come from the Prismic
    // writing room, redirect to the homepage.
    if (isPrismicPreview === false) {
      navigate("/");
    }
  }, [isPrismicPreview]);

  if (isPrismicPreview === true || isPrismicPreview === null) {
    return <p>Loading preview…</p>;
  } else {
    return <></>;
  }
};

// TODO
export default withPrismicPreviewResolver(PreviewPage, repositoryConfigs);
