import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Fields from './fields';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './FormComponent.module.css';

const requiredNumber = yup.lazy((value) =>
  value === '' ? yup.string().required() : yup.number()
);

const schema = yup
  .object()
  .shape({
    currentSavings: requiredNumber,
    yearlyContribution: requiredNumber,
    expectedReturn: requiredNumber,
    duration: requiredNumber,
  })
  .required();

const BaseForm = ({ onSaveYearlyInterest, onClearForm }) => {
  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    defaultValues: {
      currentSavings: null,
      yearlyContribution: null,
      expectedReturn: null,
      duration: null,
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = methods;

  const onHandleSubmit = ({
    yearlyContribution,
    duration,
    currentSavings: initialCurrentSavings,
    expectedReturn: initialExpectedReturn,
  }) => {
    const yearlyData = []; // per-year results

    let currentSavings = initialCurrentSavings;
    const expectedReturn = initialExpectedReturn / 100;
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      yearlyData.push({
        year: i + 1,
        currentSavings: (currentSavings += yearlyInterest + yearlyContribution),
        yearlyInterest,
        totalInterest: (totalInterest += yearlyInterest),
        investedCapital: yearlyContribution + currentSavings,
      });
    }

    onSaveYearlyInterest(yearlyData);
  };

  const handleReset = () => {
    if (onClearForm) onClearForm();
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onHandleSubmit)}>
        <div className={styles['input-group']}>
          <Fields.CurrentSavings />
          <Fields.YearlyContribution />
        </div>
        <div className={styles['input-group']}>
          <Fields.ExpectedReturn />
          <Fields.Duration />
        </div>
        {errors && (
          <ul>
            {Object.values(errors).map(({ message }) => (
              <li>{message}</li>
            ))}
          </ul>
        )}
        <p className={styles.actions}>
          <button
            type='reset'
            className={styles.buttonAlt}
            onClick={handleReset}
          >
            Reset
          </button>
          <button type='submit' className={styles.button} disabled={!isDirty}>
            Calculate
          </button>
        </p>
      </form>
    </FormProvider>
  );
};

export default BaseForm;
