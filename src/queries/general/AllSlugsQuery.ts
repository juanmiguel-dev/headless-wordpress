import { gql } from "graphql-tag";

export const AllSlugsQuery = gql`
  query AllSlugsQuery {
    posts(first: 10000) {
      nodes {
        slug
      }
    }
    pages(first: 10000) {
      nodes {
        slug
      }
    }
  }
`;
