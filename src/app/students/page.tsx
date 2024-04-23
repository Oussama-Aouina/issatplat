import Students from "@/components/Dashboard/Students";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const StudentsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Students />
    </DefaultLayout>
  );
};

export default StudentsPage;
