import { DialogPanel } from "@headlessui/react";
import { ModalProps } from "../interfaces";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export default function CreditCardModal({ setIsOpen }: ModalProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    const dataCreditCard = {
      ...data,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      cardHolderID: uuidv4(),
    };

    console.log(dataCreditCard);
  });

  return (
    <DialogPanel className="w-4/5 space-y-4 rounded-lg bg-white p-6 md:w-2/5">
      <h3 className="text-center text-xl font-bold">Register Credit Card</h3>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-3 [&>div>input]:rounded-md [&>div>input]:border [&>div>input]:border-gray-300 [&>div>input]:px-3 [&>div>input]:py-1.5">
          <div className="flex flex-col">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              {...register("cardNumber")}
              className="focus:outline-none"
            />
          </div>

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
            <label htmlFor="expiration">Expiration:</label>
            <input
              type="month"
              id="expiration"
              {...register("expiration")}
              className="focus:outline-none"
            />
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
