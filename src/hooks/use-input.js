import { useState } from "react";

const useInput = (validateValue, formatValue = (value) => value, initialValue = "") => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(formatValue(event.target.value));
    setIsTouched(false);
  };

  const valueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setIsTouched(false);
    setEnteredValue('');
  }

  return {
    value: enteredValue,
    hasError: hasError,
    isValid: valueIsValid,
    valueChangeHandler: valueChangeHandler,
    valueBlurHandler: valueBlurHandler,
    resetInput: resetInput
  };
};

export default useInput;