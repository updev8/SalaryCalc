import React, { isValidElement, cloneElement, ReactNode } from 'react';
import { useComponentVisible } from '../../hooks/useComponentVisible';
import './Tip.scss';

interface TipProps {
  tip: string;
  children: ReactNode;
}

export interface TipChildrenProps {
  isClicked?: boolean;
}

export const Tip: React.FC<TipProps> = ({ children, tip }) => {
  const {
    isVisible,
    setIsVisible,
    isClicked,
    setIsClicked,
    ref,
  } = useComponentVisible(false);

  const onClick = (): void => {
    isClicked ? setIsVisible(false) : setIsVisible(true);
    setIsClicked(!isClicked);
  };

  return (
    <span
      className="tip"
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => !isClicked && setIsVisible(false)}
    >
      {isVisible && <span className="tip__content">{tip}</span>}
      <span className="tip__target">
        {isValidElement(children) && cloneElement(children, { isClicked })}
      </span>
    </span>
  );
};
