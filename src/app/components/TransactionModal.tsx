import { DialogPanel } from "@headlessui/react";
import { ModalProps } from "../interfaces";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import CustomInput from "./inputs/CustomInput";

export default function TransactionModal({ setIsOpen }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
              <CustomInput
                errors={errors}
                register={register}
                label="User Status"
                name="userStatus"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <CustomInput
                errors={errors}
                register={register}
                label="Card Holder"
                name="cardHolder"
              />
            </div>

            <div className="flex flex-col">
              <CustomInput
                errors={errors}
                register={register}
                label="Credit Card"
                name="creditCard"
                type="number"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <CustomInput
                errors={errors}
                register={register}
                label="Company"
                name="company"
              />
            </div>

            <div className="flex flex-col">
              <CustomInput
                errors={errors}
                register={register}
                label="Status"
                name="status"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <CustomInput
                errors={errors}
                register={register}
                label="Amount"
                name="amount"
                type="number"
              />
            </div>

            <div className="flex flex-col">
              <CustomInput
                errors={errors}
                register={register}
                label="Event"
                name="event"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <CustomInput
                errors={errors}
                register={register}
                label="Memo"
                name="memo"
              />
            </div>

            <div className="flex flex-col">
              <CustomInput
                errors={errors}
                register={register}
                label="Expense"
                name="expense"
              />
            </div>
          </div>

          <div className="flex gap-10 [&>div]:flex-1">
            <div className="flex flex-col">
              <label htmlFor="file">File:</label>
              <input
                type="file"
                id="file"
                {...register("file")}
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
