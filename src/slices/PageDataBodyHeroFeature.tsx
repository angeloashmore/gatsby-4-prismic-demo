import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// TODO
import { RichText, Elements } from "prismic-reactjs";

import { PageDataBodyHeroFeatureFragment } from "../types.generated";

import { ButtonLink } from "../components/ButtonLink";

export type PageDataBodyHeroFeatureSlice = {
  slice_type: "hero_feature";
} & PageDataBodyHeroFeatureFragment;

// TODO
type PageDataBodyHeroFeatureProps = {
  slice: PageDataBodyHeroFeatureSlice;
};

export const PageDataBodyHeroFeature = ({
  slice,
}: PageDataBodyHeroFeatureProps) => {
  return (
    <section className="max-w-6xl px-6 py-8 mx-auto md:py-14 w-full">
      <div className="items-center grid gap-5 md:grid-cols-12 md:gap-14">
        <div className="justify-items-center md:justify-items-start grid gap-5 md:gap-8 md:col-span-6">
          {slice.primary?.text?.text && (
            <div className="text-center text-gray-700 md:text-left md:text-lg">
              <div className="grid gap-5 md:gap-8 ">
                {/* TODO */}
                <RichText
                  render={slice.primary.text.raw}
                  htmlSerializer={(type, _element, _content, children, key) => {
                    switch (type) {
                      case Elements.heading1: {
                        return (
                          <h2
                            key={key}
                            className="font-sans text-2xl font-extrabold leading-tight tracking-tight text-purple-800 md:text-5xl"
                          >
                            {children}
                          </h2>
                        );
                      }

                      case Elements.heading2: {
                        return (
                          <p
                            key={key}
                            className="font-sans text-sm font-bold leading-normal tracking-widest text-purple-800 uppercase md:text-base"
                          >
                            {children}
                          </p>
                        );
                      }
                    }
                  }}
                />
              </div>
            </div>
          )}
          {slice.primary?.button_link?.url && (
            <ButtonLink
              href={slice.primary.button_link.url}
              target={slice.primary.button_link?.target}
              variant="purple"
            >
              {slice.primary.button_text?.text || "Learn More"}
            </ButtonLink>
          )}
        </div>
        <div className="md:col-span-6">
          {slice.primary?.image?.gatsbyImageData ? (
            <GatsbyImage
              image={slice.primary.image.gatsbyImageData}
              alt={slice.primary.image?.alt || ""}
              className="w-full max-w-md mx-auto md:max-w-none"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export const fragment = graphql`
  fragment PageDataBodyHeroFeature on PrismicPageDataBodyHeroFeature {
    slice_type
    primary {
      text {
        text
        raw
      }
      button_text {
        text
      }
      button_link {
        url
        target
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH)
        alt
      }
    }
  }
`;
