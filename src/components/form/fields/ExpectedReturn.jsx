import React from 'react'
import FormInputWrapper from '../../FormInputWrapper/FormInputWrapper'
import Number from '../../inputs/controller/number/Number'

const ExpectedReturn = () => {
  return (
    <FormInputWrapper name='expectedReturn' label='Expected Interest (%, per year)' >
      <Number />
    </FormInputWrapper>
  )
}

export default ExpectedReturn