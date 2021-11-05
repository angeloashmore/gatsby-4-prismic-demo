import * as React from "react";
import { graphql } from "gatsby";
// TODO
import { RichText, Elements } from "prismic-reactjs";

import { PageDataBodyVideoFragment } from "../types.generated";
import { linkResolver } from "../linkResolver";

import { Link } from "../components/Link";

export type PageDataBodyVideoSlice = {
  slice_type: "video";
} & PageDataBodyVideoFragment;

// TODO
type PageDataBodyVideoProps = {
  slice: PageDataBodyVideoSlice;
};

export const PageDataBodyVideo = ({ slice }: PageDataBodyVideoProps) => {
  return (
    <section className="max-w-4xl px-6 py-8 mx-auto md:py-14 w-full">
      <div className="justify-items-center grid gap-5 md:gap-8">
        {slice.primary?.intro_text?.text && (
          <div className="text-center grid gap-5 md:gap-8 md:text-lg">
            {/* TODO */}
            <RichText
              render={slice.primary.intro_text.raw}
              htmlSerializer={(type, element, _content, children, key) => {
                switch (type) {
                  case Elements.heading2: {
                    return (
                      <h2
                        key={key}
                        className="font-sans text-2xl font-extrabold leading-tight tracking-tight md:text-5xl"
                      >
                        {children}
                      </h2>
                    );
                  }
                  case Elements.heading3: {
                    return (
                      <p
                        key={key}
                        className="font-sans text-sm font-bold leading-normal tracking-widest text-purple-800 uppercase md:text-base"
                      >
                        {children}
                      </p>
                    );
                  }

                  case Elements.paragraph: {
                    return (
                      <p key={key} className="max-w-3xl">
                        {children}
                      </p>
                    );
                  }

                  case Elements.hyperlink: {
                    return (
                      <Link href={linkResolver(element.data)}>
                        <span className="text-purple-800 underline">
                          {children}
                        </span>
                      </Link>
                    );
                  }
                }
              }}
            />
          </div>
        )}
        {slice.primary?.video_url?.html && (
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
        raw
      }
      video_url {
        html
      }
    }
  }
`;
