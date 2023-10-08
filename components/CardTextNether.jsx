import React from 'react';
import styles from '@/styles/cardNether.module.css';

const CardText = ({ text }) => {
  return <p className={styles.cardText}>{text}</p>;
};

export default CardText;
