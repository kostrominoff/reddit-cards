import React, {useEffect, useState} from 'react';
import CardText from "./CardText/CardText";
import {ICardTextProps} from "../../types/ICardTextProps";
import Dropdown from "../Dropdown/Dropdown";
import styles from './card.module.scss';
import Rating from "../Rating/Rating";
import Controls from "../Controls/Controls";
/*
TODO: Rating component
TODO: Mobile Card
       - Adaptive
       - Controls component
 */

function Card({ title, publicTime, user, watched, preview }: ICardTextProps) {
  const [isPC, setIsPC] = useState(window.screen.width >= 768);

  useEffect(() => {
    window.onresize = () => {
      setIsPC(window.screen.width >= 768);
    }
  }, [isPC])
  console.log(isPC)

  if (isPC) {
    return (
      <li className={styles.card}>
        <img className={styles.img} src={ preview } alt="Превью новости" />
        <CardText
          title={title}
          publicTime={publicTime}
          user={user}
          watched={watched}
          isPC={isPC}
        />
        <Dropdown isPC={isPC} />
        <Rating />
      </li>
    );
  }
  //Mobile
  return (
    <li className={styles.card}>
      <CardText
        title={title}
        publicTime={publicTime}
        user={user}
        watched={watched}
        isPC={isPC}
      />
      <img className={styles.img} src={ preview } alt="Превью новости" />
      <Controls />
    </li>
  );
}

export default Card;