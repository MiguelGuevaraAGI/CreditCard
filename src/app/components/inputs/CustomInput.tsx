import { UseFormRegister } from "react-hook-form";

interface CustomInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  label: string;
  name: string;
  type?: string;
}
export default function CustomInput({
  errors,
  register,
  label,
  name,
  type = "text",
}: CustomInputProps) {
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={name}
        {...register(name, {
          required: `${label} is required`,
        })}
        className="rounded-md border border-gray-300 px-3 py-1.5 focus:outline-none"
      />

      {errors[name] && (
        <span className="text-sm text-red-500">{errors[name].message}</span>
      )}
    </>
  );
}
