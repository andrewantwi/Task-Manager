import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (event: React.FormEvent) => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onSubmit }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-[90%] md:w-[50%] lg:w-[30%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Add New Task</h2>
          <button className="text-xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="taskName"
            >
              Task Name
            </label>
            <input
              type="text"
              id="taskName"
              className="block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="taskName"
            >
              Task Name
            </label>
            <input
              type="text"
              id="taskName"
              className="block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="taskName"
            >
              Task Name
            </label>
            <input
              type="calendar"
              id="taskName"
              className="block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
