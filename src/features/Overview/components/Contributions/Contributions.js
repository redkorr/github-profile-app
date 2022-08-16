import React from 'react';

import styles from './Contributions.module.css';

const Contributions = ({ contributions }) => {
  console.log('a', contributions);
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
    console.log('przed populate', contributions.weeks);
    const populate = contributions.weeks.forEach((week, i) => {
      week.contributionDays.forEach((day) => {
        calendar[i][day.weekday] = day.color;
      });
    });
  };
  populateCalendar(contributions, calendar);
  return (
    <div>
      <div className={styles.table}>
        {calendar.map((i, j) => (
          <div key={`j-${j}`}>
            {i.map((i, j) => (
              <div className={styles.cell}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributions;
