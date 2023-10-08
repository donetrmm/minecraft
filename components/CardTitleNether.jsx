import React from 'react';
import styles from '@/styles/cardNether.module.css';

const CardTitle = ({ title }) => {
  return <h2 className={styles.cardTitle}>{title}</h2>;
};

export default CardTitle;
