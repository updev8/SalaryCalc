import React, { InputHTMLAttributes } from 'react';
import { Field } from 'redux-form';
import { numberFormat } from '../../utils/numberFormat';
import './Input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  caption?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const { className = '', name, caption, ...rest } = props;

  return (
    <div
      className={`input input-group mb-3 d-flex align-items-center ${className}`}
    >
      <Field
        className="input__field form-control"
        component="input"
        name={name}
        {...rest}
      />
      {caption && <span className="ml-2 mr-2 font-weight-bold">{caption}</span>}
    </div>
  );
};
