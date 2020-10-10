import * as React from 'react';
import { Form } from 'formik';
import { FormFormik, FieldsContext } from 'ohm-form-formik';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

const fields = {
  nameScope: [
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
  ],
  emailScope: [
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
    }
  ],
};

const BasicForm = () => {
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
      <Form className={classes.root}>
        <div>
          <FieldsContext name='nameScope' />
        </div>
        <div>
          <FieldsContext name='emailScope' />
        </div>
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

export default BasicForm;
