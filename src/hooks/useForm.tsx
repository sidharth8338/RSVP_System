import React, { useState } from "react";

type CustomInput = {
  name: string;
  value: unknown;
};

function UseForm(formValues: { [key: string]: unknown } | null) {
  const [values, setValues] = useState<{ [key: string]: unknown } | null>(
    formValues
  );
  const setForm = <T extends HTMLFormElement>(
    e: React.FormEvent<T> | CustomInput,
    takeControl: boolean = false
  ) => {
    const target = takeControl
      ? (e as CustomInput)
      : ((e as React.FormEvent<T>).target as T);
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const bulkUpdate = (
    val: { [key: string]: unknown },
    isReplaceAll: boolean = false
  ) => {
    if (isReplaceAll) {
      setValues(val);
    } else {
      setValues({
        ...values,
        ...val,
      });
    }
  };

  return {
    values,
    setValues,
    setForm,
    bulkUpdate,
  };
}

export default UseForm;
