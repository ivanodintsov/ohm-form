import * as React from 'react';
import { Form } from 'formik';
import { FormFormik, FieldsContext } from 'ohm-form-formik';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

const formComponents = {
  input: TextField,
  checkbox: CheckboxWithLabel,
};

const fields = {
  nameScope: [
    {
      formComponent: 'input',
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
      formComponent: 'input',
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
      formComponent: 'input',
      options: {
        id: 'email',
        name: 'email',
        placeholder: 'jane@acme.com',
        type: 'email',
        label: 'Email',
        className: 'full-width-input',
      },
      validation: {
        type: 'string',
        required: true,
        email: true,
      },
      initialValue: '',
    },
  ],
  checkboxes: [
    {
      formComponent: 'checkbox',
      options: {
        id: 'privacyPolicy',
        name: 'privacyPolicy',
        type: 'checkbox',
        Label: {
          label: (<>I have read and agree to the <a href='#' target='_blank'>Privacy Policy</a></>)
        },
      },
      validation: {
        type: 'boolean',
        oneOf: [[true]],
      },
      initialValue: false,
    },
  ]
};

const FormComponents = () => {
  const classes = useStyles();

  const formik = {
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  };

  return (
    <FormFormik
      fields={fields}
      components={formComponents}
      formik={formik}
    >
      <Form className={classes.root}>
        <div>
          <FieldsContext name='nameScope' />
        </div>
        <div>
          <FieldsContext name='emailScope' />
        </div>
        <div>
          <FieldsContext name='checkboxes' />
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

export default FormComponents;
