import { gql } from '@apollo/client';

export const CORE_REPOSITORIES_FIELDS = gql`
fragment CoreRepositoriesFields on Repository {
    id
    fullName
    description
    language
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
}
`