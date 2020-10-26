import React from 'react';
import { Field } from 'redux-form';
import './Switch.scss';

interface FormSwitchProps {
  className?: string;
  id: string;
  name: string;
  textBefore: string;
  textAfter: string;
}

export const Switch: React.FC<FormSwitchProps> = (props) => {
  const { className = '', textBefore, textAfter, name, id } = props;

  return (
    <div className={`switch custom-control custom-switch pl-0 ${className}`}>
      <label className="text-secondary mr-5" htmlFor={id}>
        {textBefore}
      </label>

      <Field
        className="switch__input custom-control-input"
        component="input"
        type="checkbox"
        id={id}
        name={name}
      />

      <label className="switch__toggle custom-control-label" htmlFor={id}>
        {textAfter}
      </label>
    </div>
  );
};
