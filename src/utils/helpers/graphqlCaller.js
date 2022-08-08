import { request, GraphQLClient } from 'graphql-request';

const graphqlCaller = (query) => {
  const endpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  });
  return (variables) => {
    return client.request(query, variables);
  };
};

export default graphqlCaller;
