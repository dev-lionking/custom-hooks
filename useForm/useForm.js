import React from "react";
import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFomrState] = useState(initialForm);

  //Edicion y manejo de componentes
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFomrState({
      ...formState,
      [name]: value,
    });
  };

  //Reseteo de formulario
  const onResetForm = () => {
    setFomrState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
