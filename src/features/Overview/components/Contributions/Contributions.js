import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import DataContext from '../../../../context/DataContext';
import Tooltip from './components/Tooltip/Tooltip';
import styles from './Contributions.module.css';

const Contributions = () => {
  const { name } = useParams();
  const { useContributions } = useContext(DataContext);
  const [contributions, isLoading] = useContributions(name);
  console.log('contributions', useContributions(name));
  const generateCalendar = () => {
    const newCalendar = [];
    for (let i = 0; i < 53; i++) {
      newCalendar[i] = [];

      for (let j = 0; j < 7; j++) {
        newCalendar[i][j] = ['transparent', 0, 0];
      }
    }
    return newCalendar;
  };
  const calendar = generateCalendar();

  const populateCalendar = (contributions, calendar) => {
    contributions.forEach((week, i) => {
      week.contributionDays.forEach((day) => {
        if (day.color !== '#ebedf0')
          calendar[i][day.weekday] = [
            day.color,
            day.contributionCount,
            day.date,
          ];
        else
          calendar[i][day.weekday] = [
            '#e7f6f2',
            day.contributionCount,
            day.date,
          ];
      });
    });
  };
  populateCalendar(contributions, calendar);
  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.wrapper}>
          <div>
            <p className={styles.weekDay}>Mon</p>
            <p className={styles.weekDay}>Wed</p>
            <p className={styles.weekDay}>Fri</p>
          </div>
          <div className={styles.table}>
            {calendar.map((row, col) => (
              <div key={`col-${col}`}>
                {row.map((row, col) => (
                  <div
                    key={`row-${col}`}
                    className={
                      row[0] === 'transparent'
                        ? `${styles.cell} ${styles.hidden}`
                        : styles.cell
                    }
                    style={{ backgroundColor: `${row[0]}` }}
                  >
                    <Tooltip content={`${row[1]} contributions on ${row[2]}`} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Contributions;
