import { gql } from "graphql-tag";

export const AllProjectsQuery = gql`
  query AllProjectsQuery {
    projects(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        databaseId
        title
        slug
        excerpt
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
