import * as React from "react";
import { Link as GatsbyLink } from "gatsby";

// TODO
export type LinkProps = {
  href: string;
  target?: string | null;
  children?: React.ReactNode;
};

// TODO
export const Link = ({ href, target, ...props }: LinkProps): JSX.Element => {
  const isExternal = /^https?:\/\//.test(href);

  return isExternal ? (
    <a href={href} target={target || undefined} {...props} />
  ) : (
    <GatsbyLink to={href} target={target || undefined} {...props} />
  );
};
