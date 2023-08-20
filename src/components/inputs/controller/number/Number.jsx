import { Controller, useFormContext } from 'react-hook-form';
import { Number as NumberUI } from '../../number/Number';

const Number = (props) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field }) => <NumberUI {...field} value={props.value} />}
    />
  );
};

export default Number;
