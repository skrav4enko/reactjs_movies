import React from 'react';
import { element, arrayOf } from 'prop-types';

import styles from './styles.module.scss';

const ButtonGroup = ({ children }) => {
  return <div className={styles.buttonGroup}>{children}</div>;
};

ButtonGroup.propTypes = {
  children: arrayOf(element),
};

ButtonGroup.defaultProps = {
  children: 'element',
};

export default ButtonGroup;
