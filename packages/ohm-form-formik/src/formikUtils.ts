import is from 'ramda/src/is';
import pipe from 'ramda/src/pipe';
import flatten from 'ramda/src/flatten';
import values from 'ramda/src/values';
import { FieldsMixedType, FieldsArray } from 'ohm-form';

export const createInitialValues = (fields: FieldsMixedType) => {
  let fieldsList: FieldsArray = fields as FieldsArray;

  if (!is(Array, fieldsList)) {
    fieldsList = pipe(values, flatten)(fieldsList) as FieldsArray;
  }

  return fieldsList.reduce((acc, item) => {
    acc[item.options.name] = item.initialValue;
    return acc;
  }, {} as {[key: string]: any});
};
