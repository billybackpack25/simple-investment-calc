import React from 'react'

const FormInputWrapper = (props) => {
  return (
    <p>
      <label htmlFor={props.name}>{props.label}</label>
      {React.cloneElement(props.children, {
        name: props.name,
        id: props.name
      })}
    </p>
  )
}

export default FormInputWrapper