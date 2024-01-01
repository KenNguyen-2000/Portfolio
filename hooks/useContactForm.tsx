'use client';

import { useState } from 'react';

const useContactForm = () => {
  const [values, setValues] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const formReset = () => {
    setValues({
      email: '',
      name: '',
      message: '',
    });
  };

  return { values, handleChange, formReset };
};

export default useContactForm;
