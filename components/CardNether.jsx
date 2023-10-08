import React from 'react';
import CardImage from '@/components/CardImageNether';
import CardTitle from '@/components/CardTitleNether';
import CardText from '@/components/CardTextNether';
import styles from '@/styles/cardNether.module.css';

const MinecraftCard = (data) => {
  return (
    <div className={styles.card}>
      <CardImage image={data.image} alt={data.title} />
      <CardTitle title={data.title} />
      <CardText text={data.text} />
    </div>
  );
};

export default MinecraftCard;

