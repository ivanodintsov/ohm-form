import * as React from 'react';
import { FormContextType } from './types';

export const FormContext = React.createContext<FormContextType<any>>(
  undefined as any
);

export const FormProvider = FormContext.Provider;
export const FormConsumer = FormContext.Consumer;

export function useFormContext<Values>() {
  return React.useContext<FormContextType<Values>>(FormContext);
}
