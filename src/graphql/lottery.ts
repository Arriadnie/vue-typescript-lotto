import { gql } from "@apollo/client/core";

export const DRAW = gql`
  query Draw($date: String!, $limit: Int!, $type: String!) {
    draw(date: $date, limit: $limit, type: $type) {
      draws {
        additionalNumbers
        date
        gameAmount
        jackpot
        megaPlier
        numbers
        odds {
          numberOfWinners
          numbers
          winningClass
          odd
        }
        powerPlay
        rollDown
      }
      success
      backendError
    }
  }
`;
