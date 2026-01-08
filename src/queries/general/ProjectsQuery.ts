import gql from "graphql-tag";

export const ProjectsQuery = gql`
  query ProjectsQuery {
    projects(first: 6, where: { orderby: { field: DATE, order: DESC } }) {
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
          websiteUrl
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