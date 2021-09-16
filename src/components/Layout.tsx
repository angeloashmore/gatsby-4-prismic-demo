import * as React from "react";
import { Helmet } from "react-helmet-async";

export type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Helmet titleTemplate="%s | Gatsby" defaultTitle="Gatsby">
        <html lang="en" />
      </Helmet>
      <main className="py-8 md:py-14">{children}</main>
    </>
  );
};
