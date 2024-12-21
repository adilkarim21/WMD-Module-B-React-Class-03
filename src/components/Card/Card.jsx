import React from 'react';
import styles from '../Card/Card.module.css';

const Card = ({ imgSRC, title, desc }) => {
  
    return (

        <div className={styles.CardsDiv}>
            <img src={imgSRC} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
  
    )

}

export default Card
