import gql from "graphql-tag";

export const PostQuery = gql`
  query PostQuery($id: ID!, $preview: Boolean = false) {
    post(id: $id, idType: DATABASE_ID, asPreview: $preview) {
      content
      date
      title
      databaseId
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
        }
      }
    }
  }
`;
