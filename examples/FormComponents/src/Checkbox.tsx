import * as React from "react";
import { useField, FieldProps } from "formik";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MuiCheckbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";

type CheckboxProps = FieldProps & {
  label: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, ...rest }) => {
  const [field, meta] = useField({ name: rest.field.name });

  return (
    <FormControl error={meta.error}>
      <FormControlLabel control={<MuiCheckbox {...field} />} label={label} />
      <FormHelperText>{meta.error}</FormHelperText>
    </FormControl>
  );
};

export default Checkbox;
