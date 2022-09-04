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
  }
`;

export const BASE_REVIEW_FIELDS = gql`
  fragment BaseReviewFields on Review {
    id
    text
    rating
    createdAt
    repository {
      name
      fullName
      url
    }
    user {
      id
      username
    }
  }
`;

export const BASE_PAGEINFO_FIELDS = gql`
  fragment BasePageInfoFelds on PageInfo {
    endCursor
    startCursor
    hasNextPage
  }
`;
