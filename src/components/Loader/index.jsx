import { Oval } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Oval
        ariaLabel = 'three-dots-loading'  
        height={100}
        width={100}
        radius={9}
        strokeWidth={5}
        color="blue"
        secondaryColor="white"
      />
    </div>
  );
};
