import React, { ReactNode } from "react";
import { WrappedFieldProps } from "redux-form/lib/Field";
import s from "./FormsControls.module.css";

type FormControlType = WrappedFieldProps & {
  children: ReactNode;
};

const FormControl = ({ input, meta, children, ...props }: FormControlType) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props: WrappedFieldProps) => {
  return (
    <FormControl {...props}>
      <textarea {...props.input} {...props} />
    </FormControl>
  );
};

export const Input = (props: WrappedFieldProps) => {
  return (
    <FormControl {...props}>
      <input {...props.input} {...props} />
    </FormControl>
  );
};
