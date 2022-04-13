import React from 'react';
import Rating from "../Rating/Rating";
import styles from './controls.module.scss';
import Comments from "../Comments/Comments";
import Actions from "../Actions/Actions";

function Controls() {
  return (
    <div className={styles.controls}>
      <Rating />
      <Comments />
      <Actions />
    </div>
  );
}

export default Controls;