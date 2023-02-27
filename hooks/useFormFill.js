import { useState, useEffect } from 'react';

function useFormIsFilledOut(initialValues) {
  const [isFilledOut, setIsFilledOut] = useState(false);

  useEffect(() => {
    const formFields = Object.values(initialValues);
    const isFormFilledOut = formFields.every((field) => Boolean(field));
    setIsFilledOut(isFormFilledOut);
  }, [initialValues]);

  return isFilledOut;
}

export default useFormIsFilledOut;