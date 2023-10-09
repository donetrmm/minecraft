import React from 'react';
import styles from '@/styles/endMobCard.module.css';

const EndMobCard = ({ name, image, description }) => {
  return (
    <div className={styles['end-mob-card']}>
      <img src={image} alt={name} className={styles['mob-image']} />
      <h3 className={styles['mob-name']}>{name}</h3>
      <p className={styles['mob-description']}>{description}</p>
    </div>
  );
}

export default EndMobCard;
