import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import DataContext from '../../../../context/DataContext';
import styles from './Contributions.module.css';

const Contributions = () => {
  const { name } = useParams();
  const { useContributions } = useContext(DataContext);
  const [contributions, isLoading] = useContributions(name);
  console.log(useContributions(name));
  const generateCalendar = () => {
    const newCalendar = [];
    for (let i = 0; i < 53; i++) {
      newCalendar[i] = [];

      for (let j = 0; j < 7; j++) {
        newCalendar[i][j] = j;
      }
    }
    return newCalendar;
  };
  const calendar = generateCalendar();

  const populateCalendar = (contributions, calendar) => {
    contributions.forEach((week, i) => {
      week.contributionDays.forEach((day) => {
        if (day.color !== '#ebedf0') calendar[i][day.weekday] = day.color;
        else calendar[i][day.weekday] = '#e7f6f2';

        console.log(day.color);
      });
    });
  };
  populateCalendar(contributions, calendar);
  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.table}>
          {calendar.map((i, j) => (
            <div key={`j-${j}`}>
              {i.map((i, j) => (
                <div
                  key={`i-${j}`}
                  className={styles.cell}
                  style={{ backgroundColor: `${i}` }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contributions;
