import styles from '../styles.module.css';
import PropTypes from 'prop-types';

export const Button = (  {text, handleClickMore }  ) => {
    return <button   className={styles.button} onClick={handleClickMore}>{text}</button>
}


Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClickMore: PropTypes.func.isRequired,
}.isRequired