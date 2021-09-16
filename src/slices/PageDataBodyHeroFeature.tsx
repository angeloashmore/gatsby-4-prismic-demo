import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { PageDataBodyHeroFeatureFragment } from "../types.generated";

import { ButtonLink } from "../components/ButtonLink";

type PageDataBodyHeroFeatureProps =
  SliceComponentProps<PageDataBodyHeroFeatureFragment>;

export const PageDataBodyHeroFeature = ({
  slice,
}: PageDataBodyHeroFeatureProps) => {
  return (
    <section className="max-w-6xl px-6 py-8 mx-auto md:py-14 w-full">
      <div className="items-center grid gap-5 md:grid-cols-12 md:gap-14">
        <div className="justify-items-center md:justify-items-start grid gap-5 md:gap-8 md:col-span-6">
          {slice.primary.text?.text && (
            <div className="text-center text-gray-700 md:text-left md:text-lg">
              <div className="grid gap-5 md:gap-8 ">
                <PrismicRichText
                  field={slice.primary.text.richText}
                  components={{
                    heading1: ({ children }) => (
                      <h2 className="font-sans text-2xl font-extrabold leading-tight tracking-tight text-purple-800 md:text-5xl">
                        {children}
                      </h2>
                    ),
                    heading2: ({ children }) => (
                      <p className="font-sans text-sm font-bold leading-normal tracking-widest text-purple-800 uppercase md:text-base">
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>
            </div>
          )}
          {slice.primary.button_link?.url && (
            <ButtonLink
              href={slice.primary.button_link?.url}
              target={slice.primary.button_link?.target}
              variant="purple"
            >
              {slice.primary.button_text?.text || "Learn More"}
            </ButtonLink>
          )}
        </div>
        <div className="md:col-span-6">
          {slice.primary.image?.gatsbyImageData && (
            <GatsbyImage
              image={slice.primary.image.gatsbyImageData}
              alt={slice.primary.image?.alt || ""}
              className="w-full max-w-md mx-auto md:max-w-none"
            />
          )}
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
        richText
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
