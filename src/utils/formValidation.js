import { useCallback, useState } from 'react';
import isEmail from 'validator/lib/isEmail';

function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });

    if (name === 'email') {
      !isEmail(value)
        ? e.target.setCustomValidity('Неверно указана почта')
        : e.target.setCustomValidity('');
    }

    setErrors({
      ...errors,
      [name]: e.target.validationMessage,
    });

    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    errors,
    handleChange,
    isValid,
    resetForm,
  };
}

export default useFormValidation;
