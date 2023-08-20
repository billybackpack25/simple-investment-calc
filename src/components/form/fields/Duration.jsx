import React from 'react'
import FormInputWrapper from '../../FormInputWrapper/FormInputWrapper'
import Number from '../../inputs/controller/number/Number'

const Duration = () => {
  return (
    <FormInputWrapper name='duration' label='Investment Duration (years)' >
      <Number />
    </FormInputWrapper>
  )
}

export default Duration