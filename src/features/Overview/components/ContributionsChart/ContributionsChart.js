import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import DataContext from '../../../../context/DataContext';
import styles from './ContributionChart.module.css';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ContributionsChart = () => {
  const { name } = useParams();
  const { useContributionsChart } = useContext(DataContext);
  const [contributionsChartData, isLoading] = useContributionsChart(name);
  console.log(useContributionsChart(name));
  const data = {
    labels: ['Issues', 'Commits', 'Pull requests', 'Code reviews'],
    datasets: [
      {
        label: 'Public Contributions',
        data: [
          contributionsChartData.totalIssueContributions,
          contributionsChartData.totalCommitContributions,
          contributionsChartData.totalPullRequestContributions,
          contributionsChartData.totalPullRequestReviewContributions,
        ],
        backgroundColor: '#e7f6f2',
        borderColor: '#395b64',
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Chart}>
        {isLoading ? <div>isLoading...</div> : <Radar data={data} />}
      </div>
    </div>
  );
};

export default ContributionsChart;
