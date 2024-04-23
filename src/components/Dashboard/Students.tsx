import React from "react";
import TableOne from "../Tables/TableOne";
import ChatCard from "../Chat/ChatCard";
import TableFour from "../Tables/TableFour";
import TableTwo from "../Tables/TableTwo";
import FormElements from "../FormElements";
import TableThree from "../Tables/TableThree";
import GroupTable from "../Tables/GroupsTable";

const Students: React.FC = () => {
  return (
    <div>
      <div className="flex flex-shrink gap-10 max-md:flex-col ">
        <div className="col-span-12 xl:col-span-8">
          <button className="mb-3 flex justify-center rounded bg-primary p-3 px-8 font-medium text-gray hover:bg-opacity-90">
            Add Student +
          </button>
          <TableTwo />
        </div>
      </div>
    </div>
  );
};

export default Students;
