import React, { InputHTMLAttributes } from 'react';
import { Field } from 'redux-form';
import { Info } from '../Info/';
import { Tip } from '../Tip';

interface CheckProps extends InputHTMLAttributes<HTMLInputElement> {
  tip?: string;
  name: string;
  value: string;
}

export const Check: React.FC<CheckProps> = (props) => {
  const { children, tip, ...rest } = props;

  return (
    <div className="form-check d-flex align-items-center">
      <label className="form-check-label">
        <Field
          className="form-check-input"
          component="input"
          type="radio"
          {...rest}
        />
        {children}
      </label>
      {tip && (
        <Tip tip={tip}>
          <Info />
        </Tip>
      )}
    </div>
  );
};
