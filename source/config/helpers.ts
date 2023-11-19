
export const envString = (key: string, defaultValue?: string): string => {
  const value = process.env[key];

  if (value !== undefined) {
    return value
  }
  if (defaultValue !== undefined) {
    return defaultValue
  }

  throw new Error(`ENV key ${key} is not defined.`)
}

export const envBool = (key: string, defaultValue?: boolean): boolean => {
  const value = process.env[key];

  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue
    }

    throw new Error(`ENV key ${key} is not defined`)
  }

  const normalizedValue = value.trim().toLowerCase()
  if (normalizedValue === 'true') {
    return true
  }
  if (normalizedValue === 'false') {
    return false
  }

  throw new Error(`ENV key ${key} is not valid boolean.`)
}

export const envInt = (key: string, defaultValue?: number): number => {
  const value = process.env[key];

  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue
    }

    throw new Error(`ENV key ${key} is not defined`)
  }

  const parsedInt = parseInt(value)
  if (isNaN(parsedInt)) {
    throw new Error(`ENV key ${key} is not a valid number`)
  }

  return parsedInt
}
