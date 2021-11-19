import React from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import s from './style.module.css'

const Button = ({color,children}:ButtonProps):JSX.Element=>{

  return(
    <button
      className={cn(s.button,{
        [s.primary]:color == 'primary',
        [s.ghost]: color == 'ghost'
      })}
    >
     {children}
    </button>
  );
};

export default Button