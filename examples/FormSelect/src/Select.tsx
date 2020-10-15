import * as React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Select } from 'formik-material-ui';

const FormSelect = (props) => {
  const error = props.form.errors[props.field.name];

  return (
    <FormControl error={!!error}>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <Select
        {...props}
        name={props.field.name}
        inputProps={{
          id: props.id,
        }}
      >
        {props.data.map((item) => {
          return (
            <MenuItem
              key={item.value}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          )
        })}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default FormSelect;
