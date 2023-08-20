import React from 'react'
import FormInputWrapper from '../../FormInputWrapper/FormInputWrapper'
import Number from '../../inputs/controller/number/Number'

const YearlyContribution = () => {
  return (
    <FormInputWrapper name='yearlyContribution' label='Yearly Savings ($)' >
      <Number />
    </FormInputWrapper>
  )
}

export default YearlyContribution