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
      <div className="flex gap-5 [&>button]:rounded-md [&>button]:bg-black [&>button]:px-3 [&>button]:py-1 [&>button]:text-white">
        <button onClick={() => handleOpenModal("user")}>Register User</button>

        <button onClick={() => handleOpenModal("expense")}>
          Register Expense
        </button>

        <button onClick={() => handleOpenModal("creditCard")}>
          Register CreditCard
        </button>

        <button onClick={() => handleOpenModal("attachment")}>
          Register Attachment
        </button>

        <button onClick={() => handleOpenModal("transaction")}>
          Register Transaction
        </button>
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
    </div>
  );
}
