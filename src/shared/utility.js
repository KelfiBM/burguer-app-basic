export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  if (!rules) {
    return true;
  }

  let isValid = true;
  let trimmedValue = value.trim();
  if (rules.required) {
    isValid = trimmedValue !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = trimmedValue.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = trimmedValue.length <= rules.maxLength && isValid;
  }

  return isValid;
};
