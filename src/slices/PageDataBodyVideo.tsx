import * as React from "react";
import { graphql } from "gatsby";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { PageDataBodyVideoFragment } from "../types.generated";

import { Link } from "../components/Link";

type PageDataBodyVideoProps = SliceComponentProps<PageDataBodyVideoFragment>;

export const PageDataBodyVideo = ({ slice }: PageDataBodyVideoProps) => {
  return (
    <section className="max-w-4xl px-6 py-8 mx-auto md:py-14">
      <div className="justify-items-center grid gap-5 md:gap-8">
        {slice.primary.intro_text?.text && (
          <div className="text-center grid gap-5 md:gap-8 md:text-lg">
            <PrismicRichText
              field={slice.primary.intro_text.richText}
              components={{
                heading2: ({ children }) => (
                  <h2 className="font-sans text-2xl font-extrabold leading-tight tracking-tight md:text-5xl">
                    {children}
                  </h2>
                ),
                heading3: ({ children }) => (
                  <p className="font-sans text-sm font-bold leading-normal tracking-widest text-purple-800 uppercase md:text-base">
                    {children}
                  </p>
                ),
                paragraph: ({ children }) => (
                  <p className="max-w-3xl">{children}</p>
                ),
                hyperlink: ({ node, children }) => (
                  <Link field={node.data}>
                    <span className="text-purple-800 underline">
                      {children}
                    </span>
                  </Link>
                ),
              }}
            />
          </div>
        )}
        {slice.primary.video_url?.html && (
          <div className="w-full max-w-4xl">
            <div
              dangerouslySetInnerHTML={{
                __html: slice.primary.video_url?.html,
              }}
              className="video-embed aspect-w-16 aspect-h-9"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export const fragment = graphql`
  fragment PageDataBodyVideo on PrismicPageDataBodyVideo {
    slice_type
    primary {
      intro_text {
        text
        richText
      }
      video_url {
        html
      }
    }
  }
`;
