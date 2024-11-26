import { DialogPanel } from "@headlessui/react";
import { ModalProps } from "../interfaces";

export default function AttachmentModal({ setIsOpen }: ModalProps) {
  return (
    <DialogPanel className="w-4/5 space-y-4 rounded-lg bg-white px-8 py-5 md:w-2/5">
      <h3 className="text-center text-xl font-bold">Register Attachment</h3>

      <form className="space-y-4">
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
