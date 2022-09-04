import { gql } from "@apollo/client";
import {
  CORE_REPOSITORIES_FIELDS,
  SINGLE_REPOSITORIES_FIELDS,
  BASE_PAGEINFO_FIELDS,
  BASE_REVIEW_FIELDS,
} from "./fragments";

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORIES_FIELDS}
  ${BASE_PAGEINFO_FIELDS}
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...CoreRepositoriesFields
        }
        cursor
      }
      pageInfo {
        ...BasePageInfoFelds
      }
    }
  }
`;
export const CHECK_USER = gql`
  ${BASE_REVIEW_FIELDS}
  ${BASE_PAGEINFO_FIELDS}
  query getCurrentUser($includeReviews: Boolean = false, $first: Int, $after: String) {
    me {
      id
      username
      reviews (first: $first, after: $after),@include(if: $includeReviews),  {
        edges {
          node {
            ...BaseReviewFields
          }
          cursor
        }
        pageInfo {
          ...BasePageInfoFelds
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${SINGLE_REPOSITORIES_FIELDS}
  ${BASE_REVIEW_FIELDS}
  ${BASE_PAGEINFO_FIELDS}
  query repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...SingleRepositoriesFields
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...BaseReviewFields
          }
          cursor
        }
        pageInfo {
          ...BasePageInfoFelds
        }
      }
    }
  }
`;
