import Groups from "@/components/Dashboard/Groups";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

const GroupPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Groups />
    </DefaultLayout>
  );
};

export default GroupPage;
