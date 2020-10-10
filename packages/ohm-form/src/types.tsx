import * as React from 'react';

export type FieldOptions = {
  id: string;
  type: string;
  name: string;
} & any;

export type ValidationType = {
  type: string;
  [key: string]: any;
}

export type FormComponents = {
  [key: string]: React.ElementType;
};

export type FieldType = {
  component?: React.ElementType;
  options: FieldOptions;
  validation?: ValidationType;
  initialValue: any;
  components?: FormComponents;
  formComponent?: string;
};

export type FieldsObject = {
  [key: string]: FieldType;
};

export type FieldsArray = FieldType[];

export type ScopedFields = {
  [key: string]: FieldsArray;
};

export type FieldsMixedType = FieldsObject | FieldsArray | ScopedFields;

export type FieldsType<Values> = {
  fields: Values;
  components?: FormComponents;
};

export type FieldProps = FieldType;
export type FieldsProps = FieldsType<FieldType[]>;

export type FieldWithComponentProps = FieldProps & {
  fieldComponent: React.ElementType;
}

export type FormContextType<Values> = {
  fields: Values;
  components?: FormComponents;
  fieldComponent?: React.ElementType;
};

export type FormProps<Values> = {
  fields: Values;
  children: React.ReactNode;
  components?: FormComponents;
  fieldComponent?: React.ElementType;
};
