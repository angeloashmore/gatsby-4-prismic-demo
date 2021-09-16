import * as React from "react";
import clsx from "clsx";

import { Link, LinkProps } from "./Link";

const variants = {
  magenta: {
    backgroundColorClassName: "bg-pink-700",
    colorClassName: "text-white",
  },
  blue: {
    backgroundColorClassName: "bg-blue-700",
    colorClassName: "text-white",
  },
  purple: {
    backgroundColorClassName: "bg-purple-800",
    colorClassName: "text-white",
  },
  orange: {
    backgroundColorClassName: "bg-yellow-700",
    colorClassName: "text-white",
  },
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  children?: React.ReactNode;
  className?: string;
} & LinkProps;

export const ButtonLink = ({
  variant: variantName = "purple",
  className,
  children,
  ...restProps
}: ButtonProps) => {
  const variant = variants[variantName];

  return (
    <Link {...restProps}>
      <div
        className={clsx(
          "inline-block py-4 px-6 min-w-8rem rounded-lg",
          variant.colorClassName,
          variant.backgroundColorClassName,
          className
        )}
      >
        <span className="font-sans leading-normal font-bold text-lg text-center tracking-tight">
          {children}
        </span>
      </div>
    </Link>
  );
};
