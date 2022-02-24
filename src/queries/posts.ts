import gql from "graphql-tag";

// export const POST = gql`
// query {

// }
// `

export const ALL_POSTS =  gql`
  query {
    allPosts {
      edges {
        node {
          _meta {
            uid 
          }
          title
          description
          thumbnail
          release_date
          body {
            __typename
          ...on PostBodyText{
            type
            label
            primary {
              text
            }
          }
          ...on PostBodyQuote {
            type
            label
            primary {
              quote
            }
          }
          ...on PostBodyImage {
            type
            label
            primary {
              image
              caption
            }
          }
            
          }
        }
      }
    }
  }
`;
