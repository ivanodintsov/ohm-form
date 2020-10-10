import * as React from 'react';
import path from 'ramda/src/path';
import { useFormContext } from './FormContext';
import { DEFAULT_FIELD_ELEMENT } from './constants';
import {
  FieldType,
  FieldProps,
  FieldWithComponentProps,
} from './types';

const FieldWithComponent: React.FC<FieldWithComponentProps> = (props) => {
  const {
    fieldComponent: FieldComponent,
    options,
    component,
  } = props;

  return (
    <FieldComponent
      {...options}
      component={component}
    />
  );
};

const getFormField = (field: FieldType): React.ElementType => {
  if (field.component) {
    return field.component;
  }

  const formComponent: React.ElementType | undefined = path([`${field.formComponent}`], field.components);

  if (formComponent) {
    return formComponent;
  }

  return DEFAULT_FIELD_ELEMENT;
};

export const Field: React.FC<FieldProps> = (props) => {
  const {
    options,
  } = props;
  const context = useFormContext();
  const Component = getFormField(props);
  const FieldComponent: React.ElementType | undefined = path(['fieldComponent'], context);

  if (FieldComponent) {
    return (
      <FieldWithComponent
        {...props}
        fieldComponent={FieldComponent}
        component={Component}
      />
    );
  }

  return (
    <Component {...options} />
  );
};
