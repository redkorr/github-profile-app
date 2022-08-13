import graphqlCaller from '../utils/helpers/graphqlCaller';

const query = `query getUser($login: String!) {
    user(login: $login) {
        contributionsCollection {
            contributionCalendar {
              colors
            }
            contributionYears
            totalCommitContributions
            totalIssueContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
          }
        }
  }`;

export default graphqlCaller(query);
