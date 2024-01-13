const formValues = {}
const formValidation = {}

export const validatePassword = (value) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(value);
}

export const validateEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return String(email)
      .toLowerCase()
      .match(regExp);
}

export const getValidationStatus = () => {
  return Object.values(formValidation).every((validationStatus) => !!validationStatus)
}

export const setFormValue = (id, value, validator) => {
  formValues[id] = value;
  if (validator) {
    const isValid = validator(value);
    formValidation[id] = isValid;
    const element = document.getElementById(id);
    element.classList.remove('invalid');
    element.classList.remove('valid');
    if (isValid) {
      element.classList.add('valid');
    } else {
      element.classList.add('invalid');
    }
  }
}

export const submitSignUpForm = () => {
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT")
    return false
  }
  console.log("FORM IS FINE")
  console.log(formValues)
  return true
}
