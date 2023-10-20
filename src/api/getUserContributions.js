import graphqlCaller from '../utils/helpers/graphqlCaller';

const query = `query getUserContributions($login: String!, $firstDay: DateTime!, $lastDay: DateTime!) {
  user(login: $login) {
    contributionsCollection(
      from: $firstDay
      to: $lastDay
    ) {
      contributionCalendar {
        colors
        weeks {
          contributionDays {
            color
            contributionCount
            date
            weekday
          }
        }
      }
      totalIssueContributions
      totalCommitContributions
      totalPullRequestContributions
      totalPullRequestReviewContributions
    }
  }
}`;

export default graphqlCaller(query);
