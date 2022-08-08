import graphqlCaller from '../utils/helpers/graphqlCaller';

const query = `query getUser($login: String!) {
    user(login: $login) {
      name
      avatarUrl
      bio
      location
      following {
        totalCount
      }
      followers {
        totalCount
      }
      company
      createdAt
      login
    }
  }`;

export default graphqlCaller(query);
