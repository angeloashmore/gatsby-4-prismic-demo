import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import { PageDataBodyFeatureFragment } from "../types.generated";

import { ButtonLink } from "../components/ButtonLink";

type PageDataBodyFeatureProps =
  SliceComponentProps<PageDataBodyFeatureFragment>;

const variants = {
  Magenta: {
    subheadingColorClassName: "text-pink-700",
    buttonVariant: "magenta",
  },
  Blue: {
    subheadingColorClassName: "text-blue-700",
    buttonVariant: "blue",
  },
  Purple: {
    subheadingColorClassName: "text-purple-800",
    buttonVariant: "purple",
  },
  Orange: {
    subheadingColorClassName: "text-yellow-700",
    buttonVariant: "orange",
  },
} as const;

export const PageDataBodyFeature = ({ slice }: PageDataBodyFeatureProps) => {
  const variant =
    variants[(slice.primary.variant as keyof typeof variants) || "Purple"];

  return (
    <section className="mx-auto px-6 py-8 max-w-4xl md:py-14">
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
                  <p
                    className={clsx(
                      "font-sans text-sm font-bold leading-normal tracking-widest uppercase md:text-base",
                      variant.subheadingColorClassName
                    )}
                  >
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        )}
        {slice.primary.image?.gatsbyImageData && (
          <GatsbyImage
            image={slice.primary.image.gatsbyImageData}
            alt={slice.primary.image?.alt || ""}
            className="w-full max-w-2xl"
          />
        )}
        {slice.primary.detail_text?.text && (
          <div className="w-full max-w-2xl grid gap-5">
            <PrismicRichText
              field={slice.primary.detail_text.richText}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-lg leading-normal text-center text-gray-700">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        )}
        {slice.primary.button_link?.url && (
          <ButtonLink
            href={slice.primary.button_link?.url}
            target={slice.primary.button_link?.target}
            variant={variant.buttonVariant}
          >
            {slice.primary.button_text?.text || "Learn More"}
          </ButtonLink>
        )}
      </div>
    </section>
  );
};

export const fragment = graphql`
  fragment PageDataBodyFeature on PrismicPageDataBodyFeature {
    slice_type
    primary {
      variant
      intro_text {
        text
        richText
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH)
        alt
      }
      detail_text {
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
    }
  }
`;
