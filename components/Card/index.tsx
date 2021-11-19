import React from 'react';
import s from './style.module.css';
import {CardProps} from './Card.props';
import starImg from './../../public/star.png';
import Image from 'next/image';


const Card = ({title,star,money}:CardProps):JSX.Element=>{
  return(
    <div className={s.container}>
       <div className={s.title}>{title}</div>
       <div className={s.money}>{money}</div>
      <div className={s.stars}>
        <div className={star>0?s.activeStar:s.star}><Image src={starImg}/></div>
        <div className={star>1?s.activeStar:s.star}><Image src={starImg}/></div>
        <div className={star>2?s.activeStar:s.star}><Image src={starImg}/></div>
      </div>
    </div>
  );
};

export default Card;
