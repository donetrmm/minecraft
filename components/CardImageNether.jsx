import React from 'react';
import styles from '@/styles/cardNether.module.css';

const CardImage = ({ image, alt }) => {
  return <img className={styles.cardImage} src={image} alt={alt} />;
};

export default CardImage;
