import { DialogPanel } from "@headlessui/react";
import { ModalProps } from "../interfaces";

export default function ExpenseModal({ setIsOpen }: ModalProps) {
  return (
    <DialogPanel className="w-4/5 space-y-4 rounded-lg bg-white px-8 py-5 md:w-2/5">
      <h3 className="text-center text-xl font-bold">Register Expense</h3>

      <form className="space-y-4">
        <div className="space-y-3 [&>div>input]:rounded-md [&>div>input]:border [&>div>input]:border-gray-300 [&>div>input]:px-3 [&>div>input]:py-1.5">
          <div className="flex flex-col">
            <label htmlFor="expense">Expense:</label>
            <input
              type="text"
              name="expense"
              id="expense"
              className="focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="expenseDescription">Expense Description:</label>
            <textarea
              name="expenseDescription"
              id="expenseDescription"
              className="rounded-md border border-gray-300 px-3 py-1.5 h-24 focus:outline-none"
            ></textarea>
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
