"use client";
import { DialogPanel } from "@headlessui/react";
import { ModalProps, UserForm } from "../interfaces";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

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
  });

  return (
    <DialogPanel className="w-4/5 space-y-4 rounded-lg bg-white p-6 md:w-2/5">
      <h3 className="text-center text-xl font-bold">Register User</h3>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-3 [&>div>div>input]:rounded-md [&>div>div>input]:border [&>div>div>input]:border-gray-300 [&>div>div>input]:px-3 [&>div>div>input]:py-1.5">
          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",

                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
                    message: "Email invalidate",
                  },
                })}
                className="focus:outline-none"
              />

              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="focus:outline-none"
              />

              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: "Firtsname is required",
                })}
                className="focus:outline-none"
              />

              {errors.firstName && (
                <span className="text-sm text-red-500">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", {
                  required: "Lastname is required",
                })}
                className="focus:outline-none"
              />

              {errors.lastName && (
                <span className="text-sm text-red-500">
                  {errors?.lastName?.message}
                </span>
              )}
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
