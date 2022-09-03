import { gql } from "@apollo/client";
import {
  CORE_REPOSITORIES_FIELDS,
  SINGLE_REPOSITORIES_FIELDS,
} from "./fragments";

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORIES_FIELDS}
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
        endCursor
        startCursor
        hasNextPage
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

export const GET_REPOSITORY = gql`
  ${SINGLE_REPOSITORIES_FIELDS}
  query repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...SingleRepositoriesFields
      reviews(first: $first, after: $after) {
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;
