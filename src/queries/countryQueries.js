import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query Query {
    countries {
      name
      native
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;
