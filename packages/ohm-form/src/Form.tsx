import * as React from 'react';
import { FormProvider } from './FormContext';
import {
  FormProps,
  FieldsMixedType,
} from './types';

export function Form<
  Values extends FieldsMixedType
>(props: FormProps<Values>) {
  const {
    components,
    fields,
    children,
    fieldComponent,
  } = props;

  const value = React.useMemo(() => ({
    components,
    fields,
    fieldComponent,
  }), [components, fields, fieldComponent]);

  return (
    <FormProvider value={value}>
      {children}
    </FormProvider>
  );
};
