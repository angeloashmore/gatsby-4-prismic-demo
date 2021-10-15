import * as React from "react";
import { graphql } from "gatsby";
import { SliceComponentProps } from "@prismicio/react";

import { PageDataBodyInlineNavigationFragment } from "../types.generated";

import { Link } from "../components/Link";

export type PageDataBodyInlineNavigationSlice = {
  slice_type: "inline_navigation";
} & PageDataBodyInlineNavigationFragment;

type PageDataBodyInlineNavigationProps =
  SliceComponentProps<PageDataBodyInlineNavigationSlice>;

export const PageDataBodyInlineNavigation = ({
  slice,
}: PageDataBodyInlineNavigationProps) => {
  return (
    <section className="max-w-4xl px-6 py-8 mx-auto md:py-14 w-full">
      <div className="justify-items-center grid gap-5 md:gap-8">
        <p className="text-gray-700 md:text-lg">
          {slice.primary.leading_text?.text && (
            <>{slice.primary.leading_text?.text} </>
          )}
          {slice.items.map(
            (item, index) =>
              item.link?.url &&
              item.link_label?.text && (
                <>
                  <Link href={item.link.url} target={item.link.target}>
                    <span className="text-purple-800 underline">
                      {item.link_label.text}
                    </span>
                  </Link>
                  {index < slice.items.length - 1 && <> &middot; </>}
                </>
              )
          )}
        </p>
      </div>
    </section>
  );
};

export const fragment = graphql`
  fragment PageDataBodyInlineNavigation on PrismicPageDataBodyInlineNavigation {
    slice_type
    primary {
      leading_text {
        text
      }
    }
    items {
      link_label {
        text
      }
      link {
        url
        target
      }
    }
  }
`;
