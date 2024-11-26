import { DialogPanel } from "@headlessui/react";
import { ModalProps } from "../interfaces";

export default function UserModal({ setIsOpen }: ModalProps) {
  return (
    <DialogPanel className="w-4/5 space-y-4 rounded-lg bg-white px-8 py-5 md:w-2/5">
      <h3 className="text-center text-xl font-bold">Register User</h3>

      <form className="space-y-4">
        <div className="space-y-3 [&>div>div>input]:rounded-md [&>div>div>input]:border [&>div>div>input]:border-gray-300 [&>div>div>input]:px-3 [&>div>div>input]:py-1.5">
          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="roleID">Role ID:</label>
              <input
                type="number"
                name="roleID"
                id="roleID"
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="role">Role:</label>
              <input
                type="text"
                name="role"
                id="role"
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

          <button
            className="rounded bg-blue-500 text-white"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Submit
          </button>
        </div>
      </form>
    </DialogPanel>
  );
}
