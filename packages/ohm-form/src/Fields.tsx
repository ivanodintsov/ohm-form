import * as React from 'react';
import { Field } from './Field';
import {
  FieldsProps,
} from './types';

export const Fields: React.FC<FieldsProps> = (props) => {
  const { fields } = props;

  return (
    <>
      {fields.map((field) => (
        <Field
          key={field.options.id}
          {...field}
          components={props.components}
        />
      ))}
    </>
  )
};
