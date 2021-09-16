import * as React from "react";
import { Helmet } from "react-helmet-async";

export type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Gatsby</title>
      </Helmet>
      <main>{children}</main>
    </>
  );
};
