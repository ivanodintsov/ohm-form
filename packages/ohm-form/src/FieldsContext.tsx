import * as React from 'react';
import { Fields } from './Fields';
import { useFormContext } from './FormContext';
import {
  FormContextType,
  FormComponents,
} from './types';

type FieldsContextProps = {
  name?: string;
  components?: FormComponents;
};

const getFields = (context: FormContextType<any>, props: FieldsContextProps) => {
  if (props.name) {
    return context.fields[props.name];
  }

  return context.fields;
};

export const FieldsContext: React.FC<FieldsContextProps> = (props) => {
  const context = useFormContext<any>();
  const fields = getFields(context, props);

  return (
    <Fields
      fields={fields}
      components={context.components}
    />
  );
};
