import { DialogPanel } from "@headlessui/react";
import { ModalProps } from "../interfaces";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export default function TransactionModal({ setIsOpen }: ModalProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    const dataTransaction = {
      ...data,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      cardHolderId: uuidv4(),
      creditCardId: uuidv4(),
      companyId: uuidv4(),
      statusId: uuidv4(),
      expenseId: uuidv4(),
    };

    console.log(dataTransaction);
  });

  return (
    <DialogPanel className="w-4/5 space-y-4 rounded-lg bg-white p-6 md:w-2/5">
      <h3 className="text-center text-xl font-bold">Register Transaction</h3>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-3 [&>div>div>input]:rounded-md [&>div>div>input]:border [&>div>div>input]:border-gray-300 [&>div>div>input]:px-3 [&>div>div>input]:py-1.5">
          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="userStatus">User Status:</label>
              <input
                type="text"
                id="userStatus"
                {...register("userStatus")}
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="cardHolder">Card Holder:</label>
              <input
                type="text"
                id="cardHolder"
                {...register("cardHolder")}
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="creditCard">Credit Card:</label>
              <input
                type="text"
                id="creditCard"
                {...register("creditCard")}
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                {...register("company")}
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="status">Status:</label>
              <input
                type="text"
                id="status"
                {...register("status")}
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                id="amount"
                {...register("amount")}
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="event">Event:</label>
              <input
                type="text"
                id="event"
                {...register("event")}
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="memo">Memo:</label>
              <input
                type="text"
                id="memo"
                {...register("memo")}
                className="focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="expense">Expense:</label>
              <input
                type="text"
                id="expense"
                {...register("expense")}
                className="focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                {...register("description")}
                className="h-24 rounded-md border border-gray-300 px-3 py-1.5 focus:outline-none"
              ></textarea>
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
