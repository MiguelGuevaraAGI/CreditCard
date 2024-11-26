import { DialogPanel } from "@headlessui/react";
import { ModalProps } from "../interfaces";

export default function TransactionModal({ setIsOpen }: ModalProps) {
  return (
    <DialogPanel className="w-4/5 space-y-4 rounded-lg bg-white px-8 py-5 md:w-2/5">
      <h3 className="text-center text-xl font-bold">Register Transaction</h3>

      <form className="space-y-4">
        <div className="space-y-3 [&>div>div>input]:rounded-md [&>div>div>input]:border [&>div>div>input]:border-gray-300 [&>div>div>input]:px-3 [&>div>div>input]:py-1.5">
          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="UserStatus">User Status:</label>
              <input
                type="text"
                name="UserStatus"
                id="UserStatus"
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="CardHolderID">Card Holder ID:</label>
              <input
                type="number"
                name="CardHolderID"
                id="CardHolderID"
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="CardHolder">Card Holder:</label>
              <input
                type="text"
                name="CardHolder"
                id="CardHolder"
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="CreditcardID">Credit Card ID:</label>
              <input
                type="number"
                name="CreditcardID"
                id="CreditcardID"
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="Creditcard">Credit Card:</label>
              <input
                type="text"
                name="Creditcard"
                id="Creditcard"
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="CompanyID">Company ID:</label>
              <input
                type="number"
                name="CompanyID"
                id="CompanyID"
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="Company">Company:</label>
              <input
                type="text"
                name="Company"
                id="Company"
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="Description">Description:</label>
              <input
                type="text"
                name="Description"
                id="Description"
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="Amount">Amount:</label>
              <input
                type="number"
                name="Amount"
                id="Amount"
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="Event">Event:</label>
              <input
                type="text"
                name="Event"
                id="Event"
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="Memo">Memo:</label>
              <input
                type="text"
                name="Memo"
                id="Memo"
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ExpenseID">Expense ID:</label>
              <input
                type="number"
                name="ExpenseID"
                id="ExpenseID"
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="Expense">Expense:</label>
              <input
                type="text"
                name="Expense"
                id="Expense"
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="StatusID">Status ID:</label>
              <input
                type="number"
                name="StatusID"
                id="StatusID"
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="Status">Status:</label>
              <input
                type="text"
                name="Status"
                id="Status"
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
