import React, { useState } from "react";
import { useField } from "formik";

import Label from "../TextInput/Label";

function Select({ options, placeholder, label, name, ...rest }) {
  const [field, meta, helpers] = useField(name);
  const error = meta.touched && meta.error;
  const onChange = (event) => {
    const value = event.target.value;
    helpers.setValue(value);
  };
  return (
    <div>
      <Label label={label} />
      <select class="form-control"
        {...field}
        {...rest}
        placeholder={placeholder}
        onChange={onChange}
      >
        <option class="form-control" disabled selected key={1} value={null}>
          {placeholder}
        </option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      {!!error && <div class="invalid-feedback">{error}</div>}
    </div>
  );
}

export default Select;
