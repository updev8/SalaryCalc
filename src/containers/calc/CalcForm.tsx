import React from 'react';
import { reduxForm } from 'redux-form';
import { Check } from '../../components/Check';
import { Switch } from '../../components/Switch';
import { Input } from '../../components/Input';
import { CalcFormData } from '../../types/FormTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './CalcForm.scss';

const TIP = `МРОТ - минимальный размер оплаты труда. Разный для разных регионов`;

const _CalcForm = () => {
  const type = useSelector((state: RootState) => state.form.calc.values.type);

  const inputCaption = () => {
    let currency = '₽';

    if (type === 'dailyWage') return `${currency} в день`;
    if (type === 'hourlyWage') return `${currency} в час`;
    return currency;
  };

  return (
    <div className="calc-form">
      <p className="text-secondary mb-1">Сумма</p>
      <form className="d-flex flex-column ml-3">
        <Check name="type" value="monthlySalary">
          Оклад за месяц
        </Check>
        <Check name="type" value="minSalary" tip={TIP}>
          Мрот
        </Check>
        <Check name="type" value="dailyWage">
          Оплата за день
        </Check>
        <Check name="type" value="hourlyWage">
          Оплата за час
        </Check>
        <Switch
          className="mt-2 mb-2"
          id="incomeTax"
          name="incomeTax"
          textBefore="Указать с НДФЛ"
          textAfter="Без НДФЛ"
        />
        <Input
          className="calc-form__input"
          name="userInput"
          type="text"
          caption={inputCaption()}
        />
      </form>
    </div>
  );
};

export const CalcForm = reduxForm<CalcFormData>({
  form: 'calc',
  initialValues: {
    type: 'monthlySalary',
    incomeTax: false,
    userInput: '40000',
  },
})(_CalcForm);
