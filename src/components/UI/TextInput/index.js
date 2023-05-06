import { useField } from "formik";
import React from "react";
import Label from "./Label";

const TextInput = ({ name, label, ...rest }) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;

  return (
    <div>
      <Label label={label} />
      <input class="form-control" {...rest} {...field} />
      {!!error && <div class="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextInput;
