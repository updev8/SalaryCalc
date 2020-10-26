import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '../../components/Alert';
import { RootState } from '../../store';
import { numberFormat } from '../../utils/numberFormat';

export const CalcAlert = () => {
  const { incomeTax, userInput } = useSelector(
    (state: RootState) => state.form.calc.values
  );

  const userInputNum = parseInt(userInput) || 0;
  const tax = userInputNum * 0.13;

  let salary = userInputNum;
  let actualSalary = userInputNum - tax;

  if (incomeTax) {
    salary = userInputNum + tax;
    actualSalary = userInputNum;
  }

  return (
    <Alert className="mt-3">
      <ul className="mb-0 list-unstyled">
        <li>
          <span className="font-weight-bold">
            {numberFormat(actualSalary)} ₽{' '}
          </span>
          будет получать на руки
        </li>

        <li>
          <span className="font-weight-bold">{numberFormat(tax)} ₽ </span>
          НДФЛ, 13% от оклада
        </li>

        <li>
          <span className="font-weight-bold">{numberFormat(salary)} ₽ </span>
          за сотрудника в месяц
        </li>
      </ul>
    </Alert>
  );
};
