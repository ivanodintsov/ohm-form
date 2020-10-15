import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { RadioGroup } from 'formik-material-ui'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

const FormRadio = (props) => {
  const error = props.form.errors[props.field.name];

  return (
    <FormControl error={!!error}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <RadioGroup {...props} error={error}>
        {props.data.map((item) => {
          return (
            <FormControlLabel
              key={item.value}
              control={<Radio />}
              {...item}
            />
          )
        })}
      </RadioGroup>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default FormRadio;
