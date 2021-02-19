import * as React from 'react';
import { Field, Formik } from 'formik';
import { Form, useFormContext, FieldsMixedType } from 'ohm-form';
import { FormFormikProps, FormikWithFormProps } from './types';
import { createValidationSchema } from './yupUtils';
import { createInitialValues } from './formikUtils';

const FormikWithForm: React.FC<FormikWithFormProps> = (props) => {
  const context = useFormContext<FieldsMixedType>();
  const schema = React.useMemo(() => createValidationSchema(context.fields), [
    context.fields,
  ]);
  const initialValues = React.useMemo(
    () => createInitialValues(context.fields),
    [context.fields]
  );

  return (
    <Formik
      {...props}
      validationSchema={schema}
      initialValues={initialValues}
    />
  );
};

export function FormFormik<Values extends FieldsMixedType>(
  props: FormFormikProps<Values>
) {
  const { children, formik, ...rest } = props;

  return (
    <Form {...rest} fieldComponent={Field}>
      <FormikWithForm {...formik}>{children}</FormikWithForm>
    </Form>
  );
}
