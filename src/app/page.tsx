"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import UserModal from "./components/UserModal";
import ExpenseModal from "./components/ExpenseModal";
import CreditCardModal from "./components/CreditCardModal";
import AttachmentModal from "./components/AttachmentModal";
import TransactionModal from "./components/TransactionModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleOpenModal = (type: string) => {
    setModalType(type);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="bg-slate-700 text-white">
        <div className="container mx-auto flex gap-10 py-5">
          <button
            className="transition-all hover:rounded-md hover:bg-slate-800 hover:px-5 hover:py-2"
            onClick={() => handleOpenModal("user")}
          >
            Register User
          </button>

          <button
            className="transition-all hover:rounded-md hover:bg-slate-800 hover:px-5 hover:py-2"
            onClick={() => handleOpenModal("expense")}
          >
            Register Expense
          </button>

          <button
            className="transition-all hover:rounded-md hover:bg-slate-800 hover:px-5 hover:py-2"
            onClick={() => handleOpenModal("creditCard")}
          >
            Register CreditCard
          </button>

          {/* <button
            className="transition-all hover:rounded-md hover:bg-slate-800 hover:px-5 hover:py-2"
            onClick={() => handleOpenModal("attachment")}
          >
            Register Attachment
          </button> */}

          <button
            className="transition-all hover:rounded-md hover:bg-slate-800 hover:px-5 hover:py-2"
            onClick={() => handleOpenModal("transaction")}
          >
            Register Transaction
          </button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        transition
        className="fixed inset-0 flex items-center justify-center bg-black/50 transition duration-300 ease-out data-[closed]:opacity-0"
      >
        {modalType === "user" && <UserModal setIsOpen={setIsOpen} />}
        {modalType === "expense" && <ExpenseModal setIsOpen={setIsOpen} />}
        {modalType === "creditCard" && (
          <CreditCardModal setIsOpen={setIsOpen} />
        )}
        {modalType === "attachment" && (
          <AttachmentModal setIsOpen={setIsOpen} />
        )}

        {modalType === "transaction" && (
          <TransactionModal setIsOpen={setIsOpen} />
        )}
      </Dialog>

      <div className="mx-auto mt-10 w-11/12 space-y-5 rounded-lg bg-white p-10 shadow-lg">
        <h2 className="text-2xl font-bold">Transactions</h2>

        <table className="w-full table-fixed rounded-lg">
          <thead className="border-b">
            <tr className="[&>th]:text-start [&>th]:text-gray-400">
              <th>User Status</th>
              <th>Card Holder</th>
              <th className="w-52">Credit Card</th>
              <th>Company</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Event</th>
              <th>Memo</th>
              <th>Expense</th>
              <th>Attachment</th>
              <th className="w-72">Description</th>
            </tr>
          </thead>

          <tbody className="[&>tr>td]:font-bold">
            <tr>
              <td>January</td>
              <td>$100</td>
              <td>XXXX XXXX XXXX XXXX</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
              <td>icon</td>
              <td>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
