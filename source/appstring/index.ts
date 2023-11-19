import { appStringMap } from '@appString/appStringMap';
import { AppString } from '@appString/types';
import pupa from 'pupa';

export function t(str: AppString, parameters?: Record<string, any>): string {
  // Check if parameters are provided
  

  // Split the input key by dot to navigate the nested structure
  const keys = str.split('.');
  let value: any = appStringMap;

  for (const key of keys) {
    if (value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      throw new Error(`Invalid appString key: ${str}`);
    }
  }
  if (parameters) {
    return pupa(value, parameters);
  }

  if (typeof value === 'string') {
    return value;
  } else {
    throw new Error(`Invalid appString key: ${str}`);
  }
}
