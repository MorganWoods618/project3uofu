import { gql } from "@apollo/client";
export const GET_LOCATION = gql`
{
    me{
            lat
            lon
    }
}
`;
