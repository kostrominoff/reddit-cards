import React from 'react';
import styles from './cardsList.module.scss';
import Card from "../Card/Card";
import preview from '../../img/card-preview.jpg';
import userImg from '../../img/user.png';

function CardsList() {
  return (
    <ul className={styles.list}>
      <Card title={'Противоположная точка зрения на данную проблему'} publicTime={3} user={{ imgPath: userImg, name: 'Дмитрий Гришин' }} watched={1} preview={preview} />
      <Card title={'Противоположная точка зрения на данную проблему'} publicTime={3} user={{ imgPath: userImg, name: 'Дмитрий Гришин' }} watched={1} preview={preview} />
    </ul>
  );
}

export default CardsList;