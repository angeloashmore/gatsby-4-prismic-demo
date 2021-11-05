import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import { AllPagesQuery } from "../types.generated";

import { Link } from "./Link";

export type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const pages = useStaticQuery<AllPagesQuery>(graphql`
    query AllPages {
      allPrismicPage(filter: { uid: { ne: "home" } }) {
        nodes {
          _previewable
          url
          data {
            title {
              text
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet titleTemplate="%s | Gatsby" defaultTitle="Gatsby">
        <html lang="en" />
      </Helmet>
      <div>
        <header className="mx-auto px-6 py-8 max-w-6xl md:py-14 w-full">
          <nav>
            <ul className="flex flex-wrap -mt-8 -ml-8">
              <li className="pt-8 pl-8">
                <Link href="/">
                  <span className="font-bold text-purple-800">Home</span>
                </Link>
              </li>
              {pages.allPrismicPage.nodes.map(
                (page) =>
                  page.url && (
                    <li key={page.url} className="pt-8 pl-8">
                      <Link href={page.url}>
                        <span className="text-gray-600">
                          {page.data?.title?.text}
                        </span>
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </nav>
        </header>
        <main className="py-8 md:py-14">{children}</main>
      </div>
    </>
  );
};
