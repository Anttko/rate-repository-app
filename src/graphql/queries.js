import { gql } from "@apollo/client";
import { CORE_REPOSITORIES_FIELDS } from "./fragments";

//With fragment
export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORIES_FIELDS}
  query {
    repositories {
      edges {
        node {
          ...CoreRepositoriesFields
        }
      }
    }
  }
`;

// Without fragment
export const GET_ALL = gql`
  query {
    repositories {
      edges {
        node {
          fullName
          id
          language
          description
          ownerAvatarUrl
          forksCount
          stargazersCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;
export const CHECK_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;
