import {
  FaPlus,
  FaAngleDoubleRight,
  FaTasks,
  FaCalendarAlt,
} from "react-icons/fa";
import { FaAngleRight, FaNoteSticky } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import Modal from "./components/Modal";

function HomePage() {
  const [activeItem, setActiveItem] = useState("Upcoming");
  const [showModal, setShowModal] = useState<boolean>(false);

  const items = [
    { name: "Upcoming", icon: <FaAngleDoubleRight />, count: 9 },
    { name: "Today", icon: <FaTasks />, count: 4 },
    { name: "Calendar", icon: <FaCalendarAlt />, count: 1 },
    { name: "Sticky Wall", icon: <FaNoteSticky />, count: 8 },
  ];

  const lists = [
    { name: "Personal", color: "#FF6B6B", count: 12 },
    { name: "Work", color: "#6DE5F2", count: 3 },
    { name: "School", color: "#F2C53D", count: 5 },
  ];

  const tasks = [
    { name: "Research Content ideas", completed: false },
    { name: "Create Database for guests", completed: false },
    { name: "Renew Driver's license", completed: true },
    { name: "Consult accountant", completed: false },
  ];

  const handleAddTaskClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle adding new task here
    handleCloseModal();
  };

  return (
    <div className="h-screen flex p-2 justify-center">
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
      <div className="bg-[#F2F2F2]  rounded-lg h-screen w-[25%] mr-7 p-5">
        <div className="flex justify-between items-center text-[#444444]">
          <div className="text-2xl font-normal ">Menu</div>
          <div className="text-2xl">
            <IoMenu />
          </div>
        </div>
        <div className="border p-2 rounded-lg flex justify-start items-center my-4 text-[#7C7C7C]">
          <div className="mx-4">
            <IoIosSearch />
          </div>
          <div>Search</div>
        </div>
        <div className="border-b-2 p-4">
          <div className="font-semibold text-[#444444]">Tasks</div>
          <div>
            {items.map((item) => (
              <div
                key={item.name}
                className={`flex justify-between p-2 my-2 rounded-md text-[#444444] cursor-pointer ${
                  activeItem === item.name ? "bg-[#EBEBEB]" : ""
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                <div className="flex items-center">
                  <div className="mx-2 text-[#7C7C7C]">{item.icon}</div>
                  <div>{item.name}</div>
                </div>
                <div
                  className={`px-2 rounded-md ${
                    activeItem === item.name ? "bg-white" : "bg-[#EBEBEB]"
                  }`}
                >
                  {item.count}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b-2 p-4">
          <div className="font-semibold text-[#444444]">Lists</div>
          <div>
            {lists.map((list) => (
              <div
                key={list.name}
                className={`flex justify-between p-2 my-2 rounded-md text-[#444444] cursor-pointer ${
                  activeItem === list.name ? "bg-[#EBEBEB]" : ""
                }`}
                onClick={() => setActiveItem(list.name)}
              >
                <div className="flex items-center">
                  <div
                    className={`p-2 mx-2 rounded`}
                    style={{ backgroundColor: list.color }}
                  ></div>
                  <div>{list.name}</div>
                </div>
                <div
                  className={`px-2 rounded-md ${
                    activeItem === list.name ? "bg-white" : "bg-[#EBEBEB]"
                  }`}
                >
                  {list.count}
                </div>
              </div>
            ))}
            <div className="py-2 rounded-lg flex justify-start items-center cursor-pointer">
              <div className="mx-3 text-[#A3A3A3]">
                <FaPlus />
              </div>
              <div className="text-[#444444]">Add New List</div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="font-semibold text-[#444444]">Tags</div>
          <div className="my-2 flex">
            <div className="bg-[#D1EAED] px-4 py-1 mr-2 rounded-md">Tag 1</div>
            <div className="bg-[#FFDADB] px-4 py-1 mr-2 rounded-md">Tag 2</div>
            <div className="bg-[#EAEAEA] px-2 py-1 mr-2 rounded-md flex items-center">
              <div className="mr-2 text-sm">
                <FaPlus />
              </div>
              Add Tag
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-lg h-screen w-[70%] p-2">
        <div className="mb-6 p-1  flex items-center">
          <div className="header-text">Upcoming</div>
          <div className="border p-2 rounded-lg text-4xl font-normal mx-8">
            9
          </div>
        </div>
        <div className="border rounded-md h-[40%] mt-2 p-4">
          <div className="text-2xl font-medium mb-4 text-[#212529]">Today</div>
          <div
            className="border p-4 rounded-lg flex justify-start items-center text-[#A3A3A3] cursor-pointer"
            onClick={handleAddTaskClick}
          >
            <div className="mx-4 ">
              <FaPlus />
            </div>
            <div>Add New Task</div>
          </div>
          {tasks.map((task) => (
            <>
              <div className="border-b-2 flex p-4 justify-between">
                <div className="flex">
                  <div className="border rounded-md px-3 mx-3"></div>
                  <div>{task.name}</div>
                </div>

                <div>
                  <FaAngleRight />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className=" h-[46%] mt-2 flex justify-between p-1 my-2">
          <div className="rounded-lg border h-full w-[49%] p-5">
            <div className="text-2xl font-medium mb-4 text-[#212529]">
              Tomorrow
            </div>
            <div
              className="border p-4 rounded-lg flex justify-start items-center text-[#A3A3A3] cursor-pointer"
              onClick={handleAddTaskClick}
            >
              <div className="mx-4">
                <FaPlus />
              </div>
              <div>Add New Task</div>
            </div>
            {tasks.map((task) => (
              <>
                <div className="border-b-2 flex p-4 justify-between">
                  <div className="flex">
                    <div className="border rounded-md px-3 mx-3"></div>
                    <div>{task.name}</div>
                  </div>

                  <div>
                    <FaAngleRight />
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="rounded-lg border h-full w-[49%] p-5">
            <div className="text-2xl font-medium mb-4">This week</div>
            <div
              className="border p-4 rounded-lg flex justify-start items-center text-[#A3A3A3] cursor-pointer"
              onClick={handleAddTaskClick}
            >
              <div className="mx-4">
                <FaPlus />
              </div>
              <div>Add New Task</div>
            </div>
            {tasks.map((task) => (
              <>
                <div className="border-b-2 flex p-4 justify-between">
                  <div className="flex">
                    <div className="border rounded-md px-3 mx-3"></div>
                    <div>{task.name}</div>
                  </div>

                  <div>
                    <FaAngleRight />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
