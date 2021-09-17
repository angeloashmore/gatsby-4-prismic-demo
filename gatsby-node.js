const path = require("path");

exports.createPages = async (gatsbyContext) => {
  const { actions, graphql } = gatsbyContext;
  const { createPage } = actions;

  {
    const queryResult = await graphql(`
      query {
        allPrismicPage {
          nodes {
            id
            url
          }
        }
      }
    `);

    for (const page of queryResult.data.allPrismicPage.nodes ?? []) {
      createPage({
        path: page.url,
        component: path.resolve(__dirname, "src/templates/page.tsx"),
        context: { id: page.id },
        // defer: true,
      });
    }
  }
};
