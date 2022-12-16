import PropTypes from 'prop-types';
import { Audio } from 'react-loader-spinner';
import styles from '../styles.module.css';

export const Loader = ({ loud }) => {
  if (loud) {
    return (
      <div  className={styles.louder}>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
};

Loader.propTypes = {
  loud: PropTypes.bool.isRequired,
};
