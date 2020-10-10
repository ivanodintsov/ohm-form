import { FormikConfig } from 'formik';
import { FormProps } from 'ohm-form/types';

export type FormikWithFormProps = Omit<FormikConfig<any>, 'initialValues' | 'validationSchema'>;

export type FormFormikProps<Values> = FormProps<Values> & {
  formik: FormikWithFormProps;
};