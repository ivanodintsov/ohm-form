import * as React from 'react';
import { Form } from 'formik';
import { FormFormik, FieldsContext } from 'ohm-form-formik';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import FormRadio from './Radio';
import { useStyles } from './styles';

const fields = [
  {
    component: TextField,
    options: {
      id: 'firstName',
      name: 'firstName',
      placeholder: 'Jane',
      type: 'text',
      label: 'First name',
    },
    validation: {
      type: 'string',
      required: true,
      min: 2,
      max: 10
    },
    initialValue: '',
  },
  {
    component: TextField,
    options: {
      id: 'lastName',
      name: 'lastName',
      placeholder: 'Doe',
      type: 'text',
      label: 'Last name',
    },
    validation: {
      type: 'string',
      required: true,
      min: 2,
    },
    initialValue: '',
  },
  {
    component: TextField,
    options: {
      id: 'email',
      name: 'email',
      placeholder: 'jane@acme.com',
      type: 'email',
      label: 'Email',
    },
    validation: {
      type: 'string',
      required: true,
      email: true,
    },
    initialValue: '',
  },
  {
    component: FormRadio,
    options: {
      id: 'paymentType',
      name: 'paymentType',
      label: 'Payment type',
      type: 'radio',
      data: [
        {
          label: 'Type 1',
          value: '1',
        },
        {
          label: 'Type 2',
          value: '2',
        },
        {
          label: 'Type 3',
          value: '3',
        },
      ]
    },
    validation: {
      type: 'string',
      required: true,
    },
    initialValue: '',
  },
];

const FormExample = () => {
  const classes = useStyles();

  const formik = {
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  };

  return (
    <FormFormik
      fields={fields}
      formik={formik}
    >
      <Form className={classes.basicRoot}>
        <FieldsContext />
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </FormFormik>
  );
};

export default FormExample;
