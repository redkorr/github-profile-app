import graphqlCaller from '../utils/helpers/graphqlCaller';

const query = `query getUserRepositories($login: String!) {
    user(login: $login) {
      repositories(first: 10) {
        edges {
          node {
            id
            pushedAt
            description
            url
            name
            repositoryTopics(first: 5) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            watchers {
              totalCount
            }
            stargazerCount
            forks {
              totalCount
            }
            languages(first: 1) {
                nodes {
                  name
                  color
                }
              }
          }
        }
      }
    }
  }`;

export default graphqlCaller(query);
