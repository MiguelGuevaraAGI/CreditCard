import { FieldErrors, UseFormRegister } from "react-hook-form";
import { LoginForm } from "../interfaces";
import { FormEventHandler } from "react";
import CustomInput from "./inputs/CustomInput";

interface LoginComponentProps {
  errors: FieldErrors<LoginForm>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export default function LoginComponent({
  errors,
  register,
  onSubmit,
}: LoginComponentProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="animate__animated animate__fadeInDown w-96 space-y-5 rounded-lg bg-white/30 p-10"
    >
      <h2 className="text-center text-xl font-bold">Sign in</h2>

      <div className="flex flex-col">
        <CustomInput
          errors={errors}
          register={register}
          label="Email"
          name="email"
          type="email"
        />
      </div>

      <div className="flex flex-col">
        <CustomInput
          errors={errors}
          register={register}
          label="Password"
          name="password"
          type="password"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 px-4 py-1 text-white transition-all hover:bg-blue-600"
      >
        Sign in
      </button>
    </form>
  );
}
