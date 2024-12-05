"use client";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { UserForm } from "../interfaces";
import LoginComponent from "../components/LoginComponent";


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();

  const onSubmit = handleSubmit((data) => {
    const dataUser = {
      ...data,
      id: uuidv4(),
    };

    console.log(dataUser);
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <LoginComponent errors={errors} register={register} onSubmit={onSubmit} />
    </div>
  );
}
