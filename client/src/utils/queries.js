import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    User {
      username
      email
      password
      trip
    }
  }
`;

export const QUERY_TRIP = gql`
query trip($_id: String) {
    Trip(_id: $_id) {
        
    }
}`;
