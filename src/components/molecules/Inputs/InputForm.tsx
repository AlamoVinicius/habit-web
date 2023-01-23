import { HTMLAttributes, InputHTMLAttributes } from "react";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputForm = ({ label, ...rest }: InputFormProps) => {
  return (
    <>
      <label htmlFor="title" className="font-semibold leading-tight">
        {label}
      </label>
      <input {...rest} className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400" />
    </>
  );
};
