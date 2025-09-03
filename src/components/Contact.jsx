// import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export const Contact = ({ contactOpen, setContactOpen }) => {
  return (
    <div>
      <Dialog
        open={contactOpen}
        onClose={setContactOpen}
        className="relative z-90"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-gray-800 pt-5 pb-8 px-6">
                <div className="">
                  <div className="mt-3 text-center flex flex-col items-center">
                    <DialogTitle
                      as="h3"
                      className="text-2xl/loose font-bold text-gray-200"
                    >
                      Contact <span className="text-rose-500">Me</span>
                    </DialogTitle>
                    <p className="text-gray-500 mb-4">
                      This message will be sent directly to my email.
                    </p>
                    <div className="mt-2">
                      <form class="flex flex-col items-center" method="POST" action="https://formsubmit.co/zaqiihdyt13@gmail.com">
                        <label
                          className="font-semibold text-md me-auto text-gray-200"
                          for="nameField"
                        >
                          Name
                        </label>
                        <input
                          className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                          type="text"
                          name="name"
                          placeholder="Your name..."
                          required
                        />
                        <label
                          className="font-semibold text-md me-auto mt-4 text-gray-200"
                          for="emailField"
                        >
                          Email
                        </label>
                        <input
                          className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                          type="email"
                          name="email"
                          placeholder="Your email..."
                          required
                        />
                        <label
                          className="font-semibold text-md me-auto mt-4 text-gray-200"
                          for="passwordField"
                        >
                          Message
                        </label>
                        <textarea
                          className="flex items-center h-12 px-4 pt-2 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                          name="message"
                          rows="7"
                          cols="45"
                          placeholder="Message here..."
                          required
                        ></textarea>
                        <button
                          type="submit"
                          className="flex items-center justify-center h-12 px-6 w-64 bg-transparent mt-8 rounded font-semibold text-sm text-rose-500 hover:bg-gray-700 border border-rose-500 cursor-pointer"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
