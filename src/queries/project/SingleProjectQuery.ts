import { gql } from "graphql-tag";

export const SingleProjectQuery = gql`
  query SingleProjectQuery($id: ID!, $idType: ProjectIdType = SLUG) {
    project(id: $id, idType: $idType) {
      databaseId
      title
      slug
      content
      date
      uri
      projectFields {
        framework
        language
        performanceScore
        websiteurl
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;
