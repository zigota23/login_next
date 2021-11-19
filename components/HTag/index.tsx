import React from 'react';
import {HTagProps} from './HTag.props';
import s from './style.module.css'


const HTag = ({type,children}:HTagProps):JSX.Element=>{

  if(type == 'h1'){
    return<h1 className={s.h1}>{children}</h1>;
  }
  if(type == 'h2'){
    return<h2  className={s.h2}>{children}</h2>;
  }
  if(type == 'h3'){
    return<h3  className={s.h3}>{children}</h3>;
  }
  return<></>;
};

export default HTag;