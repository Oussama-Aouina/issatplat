"use client";
import React, { MouseEventHandler } from "react";
import { useState } from "react";
import { Props } from "react-apexcharts";
import SelectGroupTwo from "../SelectGroup/SelectGroupTwo";
import MultiSelect from "../FormElements/MultiSelect";
import CheckboxOne from "../Checkboxes/CheckboxOne";
import CheckboxTwo from "../Checkboxes/CheckboxTwo";
import CheckboxThree from "../Checkboxes/CheckboxThree";
import CheckboxFour from "../Checkboxes/CheckboxFour";
import CheckboxFive from "../Checkboxes/CheckboxFive";

const Popup = ({
  show,
  onClose,
  props,
}: {
  show: boolean;
  onClose?: Function;
  props?: Props;
}) => {
  const [task, settask] = useState({
    id: "",
    title: "",
    description: "",
    endDate: "",
  });

  function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    settask({ ...task, [e.target.name]: value });
  }

  const saveTask = (e: Event) => {
    if (props) {
      props.addTask(e, task);
    }
    clear();
    // onClose();
  };
  const clear = () => {
    settask({
      id: "",
      title: "",
      description: "",
      endDate: "",
    });
  };

  if (!show) return null;

  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
      <div className="absolute h-full  w-full bg-black bg-opacity-50 backdrop:blur-2xl "></div>
      <div className="z-10rounded-sm border border-stroke bg-white bg-opacity-90 p-5 text-left shadow-default backdrop-blur-lg dark:border-strokedark dark:bg-boxdark">
        <button
          className="bg-red-500 hover:bg-red-700 mb-4 flex  h-5 w-5 items-center justify-center rounded-full text-lg font-medium text-primary dark:text-secondary"
          onClick={onClose as MouseEventHandler<HTMLButtonElement>}
        >
          &times;
        </button>

        <h2 className="via-red-500 mb-4 bg-gradient-to-tl from-primary to-secondary bg-clip-text text-5xl font-bold text-transparent drop-shadow-lg">
          New Group
        </h2>
        <p className="text-xs">
          Please ensure the information is conveyed with utmost precision and
          accuracy.
        </p>
        <label className="text-gray-600 my-2 block text-sm font-normal  ">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={(e) => handlechange(e)}
          required
          placeholder="Type the title here..."
          className="text-gray-700 w-auto appearance-none rounded border px-3 py-2 text-xs leading-tight focus:outline-none"
          autoFocus
        />
        <label className="text-gray-600 my-2 block text-sm font-normal">
          Select Sector
        </label>
        <select className="h-10 w-full rounded-lg border border-stroke bg-white px-4 py-2 text-sm focus:outline-none">
          <option value="1">IT</option>
          <option value="2">Mechanic</option>
          <option value="3">Electric</option>
        </select>
        <label className="text-gray-600 my-2 block text-sm font-normal">
          Desciption
        </label>

        <div className="h-32 w-full overflow-hidden rounded-lg border ">
          <textarea
            name="description"
            value={task.description}
            required
            className="h-full w-full resize-none overflow-y-scroll px-4 py-2 text-sm text-black outline-none"
            placeholder="Type or paste your text here..."
          ></textarea>
        </div>
        <div className="flex h-full w-full items-center justify-center text-right">
          <div className="my-4 box-border h-14 w-full items-center justify-center space-x-5 pt-4">
            <button
              type="submit"
              className="rounded bg-blue-500 px-2 py-1 font-semibold text-white hover:bg-blue-700 "
            >
              Save
            </button>
            <button
              onClick={onClose as MouseEventHandler<HTMLButtonElement>}
              className="bg-red-500 hover:bg-red-700 rounded bg-red px-2 py-1 font-semibold text-white "
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
