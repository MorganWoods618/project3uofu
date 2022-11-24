import { gql } from '@apollo/client';
export const LOCATION_SEARCH = gql`
  mutation loactionSearch($lat: String, $lon: String) {
    searchLocation(lat: $lat, lon: $lon) {
      lat
      lon
    }
  }
`;