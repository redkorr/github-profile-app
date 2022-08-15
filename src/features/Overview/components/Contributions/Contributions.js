import React from 'react';

const Contributions = ({ contributions }) => {
  return (
    <table>
    {contributions.weeks.forEach((element, index) => {
      if(index === 0){
        <tr>
          {for(let i=0; let a === false ; i++){
            if(contributions.weeks.contributionDays.weekday === index){
              <td className='potem'></td>
            }
            else{
              a = true
            }
          }
          }
        </tr>
      }
    })};
    
      </table>
  );
};

export default Contributions;
