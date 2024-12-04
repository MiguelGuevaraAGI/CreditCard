"use client";
import { DialogPanel } from "@headlessui/react";
import { ModalProps, UserForm } from "../interfaces";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import CustomInput from "./inputs/CustomInput";

export default function UserModal({ setIsOpen }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();

  const onSubmit = handleSubmit((data) => {
    const dataUser = {
      ...data,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      roleId: uuidv4(),
    };

    console.log(dataUser);
    setIsOpen(false);
  });

  return (
    <DialogPanel className="w-4/5 space-y-4 rounded-lg bg-white p-6 md:w-2/5">
      <h3 className="text-center text-xl font-bold">Register User</h3>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-3 [&>div>div>input]:rounded-md [&>div>div>input]:border [&>div>div>input]:border-gray-300 [&>div>div>input]:px-3 [&>div>div>input]:py-1.5">
          <div className="flex gap-10 [&>div]:flex-1">
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
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <CustomInput
                errors={errors}
                register={register}
                label="First Name"
                name="firstName"
              />
            </div>

            <div className="flex flex-col">
              <CustomInput
                errors={errors}
                register={register}
                label="Last Name"
                name="lastName"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="role">Role:</label>
              <input
                type="text"
                id="role"
                {...register("role")}
                className="focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-10 [&>button]:px-4 [&>button]:py-1">
          <button
            className="rounded bg-red-500 text-white"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>

          <button className="rounded bg-blue-500 text-white" type="submit">
            Submit
          </button>
        </div>
      </form>
    </DialogPanel>
  );
}
