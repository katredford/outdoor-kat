import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
query Characters($id: ID, $title_img: String, $images)
query blogs{
    id
    attributes{
      Title
      Text
      createdAt
      title_img: {
        name
        caption
        formats {
          thumbnail: {
            url
          }
          medium: {
            name
            url
          }

        }
      }
    }
    images {
      data: [
        {
          id
          attributes: {
            id
            attributes
          }
        }
      ]
    }
  }
`;