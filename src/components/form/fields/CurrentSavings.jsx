import React from 'react'
import FormInputWrapper from '../../FormInputWrapper/FormInputWrapper'
import Number from '../../inputs/controller/number/Number'

const CurrentSavings = () => {
  return (
    <FormInputWrapper name='currentSavings' label='Current Savings ($)' >
      <Number />
    </FormInputWrapper>
  )
}

export default CurrentSavings