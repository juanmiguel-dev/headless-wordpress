import gql from "graphql-tag";

export const ProjectsQuery = gql`
  query ProjectsQuery {
    projects(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        excerpt
        slug
        databaseId
        date
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
  }
`;