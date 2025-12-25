import gql from "graphql-tag";

export const PortfolioQuery = gql`
  query PortfolioQuery {
    posts(first: 6, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        excerpt
        slug
        databaseId
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;
