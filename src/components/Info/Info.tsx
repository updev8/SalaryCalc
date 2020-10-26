import React from 'react';
import { ReactComponent as IconClose } from '../../assets/icons/close.svg';
import { ReactComponent as IconInfo } from '../../assets/icons/info.svg';
import { TipChildrenProps } from '../Tip';
import './Info.scss';

export const Info = ({ isClicked }: TipChildrenProps) => {
  return (
    <button className="info close float-none ml-1" type="button">
      {isClicked ? <IconClose aria-hidden /> : <IconInfo aria-hidden />}
    </button>
  );
};
