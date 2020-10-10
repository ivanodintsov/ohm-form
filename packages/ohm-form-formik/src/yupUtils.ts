import * as yup from 'yup';
import is from 'ramda/src/is';
import pipe from 'ramda/src/pipe';
import flatten from 'ramda/src/flatten';
import values from 'ramda/src/values';
import toPairs from 'ramda/src/toPairs';
import { FieldsMixedType, FieldsArray } from 'ohm-form';

export const createValidationSchema = (fields: FieldsMixedType) => {
  let fieldsList: FieldsArray = fields as FieldsArray;

  if (!is(Array, fieldsList)) {
    fieldsList = pipe(values, flatten)(fieldsList) as FieldsArray;
  }

  const schema = fieldsList.reduce((acc, item) => {
    const { validation } = item;

    if (!validation) {
      return acc;
    }

    const { type, ...restValidation } = validation;
    const validationList = toPairs(restValidation);

    acc[item.options.name] = validationList.reduce((schema, [rule, args]) => {
      if (is(Array, args)) {
        return schema[rule](...args as any[]);
      } else if (is(Boolean, args)) {
        return schema[rule]();
      } else {
        return schema[rule](args);
      }
      // @ts-ignore
    }, yup[type]());

    return acc;
  }, {} as {[key: string]: any});

  return yup.object().shape(schema);
};
