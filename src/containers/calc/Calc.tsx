import React from 'react';
import { CalcForm } from './CalcForm';
import { CalcAlert } from './CalcAlert';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Calc = () => {
  const type = useSelector((state: RootState) => state.form.calc?.values.type);

  return (
    <div className="calc">
      <CalcForm />
      {type === 'monthlySalary' && <CalcAlert />}
    </div>
  );
};
