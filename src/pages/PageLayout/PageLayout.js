import { DisplayBlock, UserCard } from './components';
import styles from './PageLayout.module.css';

const PageLayout = () => {
  return (
    <div className={styles.div}>
      <UserCard />
      <DisplayBlock />
    </div>
  );
};

export default PageLayout;
