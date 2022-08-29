import { gql } from "@apollo/client";

export const CORE_REPOSITORIES_FIELDS = gql`
  fragment CoreRepositoriesFields on Repository {
    id
    fullName
    description
    language
    stargazersCount
    forksCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
    name
  }
`;

export const SINGLE_REPOSITORIES_FIELDS = gql`
  fragment SingleRepositoriesFields on Repository {
    id
    fullName
    description
    language
    stargazersCount
    forksCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
    name
    url
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
`;
