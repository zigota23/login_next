import React from 'react';
import s from './style.module.css';
import cn from 'classnames';
import {TagProps} from './Tag.props';


const Tag = ({type,children}:TagProps):JSX.Element=>{

  return(
    <div 
    className={cn(s.tag,{
      [s.primaryColor]:type == 'primary',
      [s.grayColor]:type == 'gray',
      [s.greenColor]:type == 'green',
      [s.bloodColor]:type == 'blood'
    })}
    >
      {children}
    </div>
  );
};

export default Tag;