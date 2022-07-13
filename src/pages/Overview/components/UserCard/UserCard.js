import React from 'react';

const UserCard = ({ user }) => {
  const styles = {
    wrapper: {
      margin: '20px 25px 20px 250px',
      width: '25%',
    },
    userCardUpperSection: {
      backgroundColor: '#856c59',
      padding: '1px 15px 15px 15px',
      color: '#1c1c1c',

      borderRadius: '4px 4px 0px 0px',
    },
    userCardBottomSection: {
      backgroundColor: '#856c59',
      padding: '1px 15px 10px 15px',
      color: '#1c1c1c',

      borderRadius: '0px 0px 4px 4px',
    },
    avatar: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: '4px',
      width: '90%',
    },
    text: {
      fontWeight: 'bold',
    },
    burgerMenuWrapper: {
      paddingBottom: '0px',
    },
    burgerMenuButton: {
      margin: '0px',
      border: 'none',
      display: 'block',
      width: '100%',
      backgroundColor: '#695140',
      borderRadius: '0px 0px 4px 4px',
    },
  };
  const createDate = new Date(user.created_at);
  const today = new Date();
  const difference = (
    (today - createDate) /
    (1000 * 60 * 60 * 24) /
    365
  ).toFixed(1);
  return (
    <div style={styles.wrapper}>
      <div style={styles.userCardUpperSection}>
        <h1>{user.login}</h1>
        <h2>{user.name}</h2>
        <img alt='user avatar' style={styles.avatar} src={user.avatar_url} />
      </div>
      <div style={styles.burgerMenuWrapper}>
        <button style={styles.burgerMenuButton}>
          <img alt='burger menu icon' src='/burger-menu.svg'></img>
        </button>
      </div>
      <div style={styles.userCardBottomSection}>
        <div style={styles.text}>
          <p>Bio: {user.bio}</p>
          <p>Country: {user.location}</p>
          <div>
            <p>
              Followers: {user.followers} Following: {user.following}
            </p>
          </div>
          <p>Company: {user.company}</p>
          {user.created_at && (
            <p>Created: {createDate.toISOString().slice(0, 10)} </p>
          )}
          <p>Profile age: {difference}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
