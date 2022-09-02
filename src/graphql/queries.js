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
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...CoreRepositoriesFields
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
export const GET_REPOSITORY = gql`
  ${SINGLE_REPOSITORIES_FIELDS}
  query repository($id: ID!) {
    repository(id: $id) {
      ...SingleRepositoriesFields
    }
  }
`;
